<template>

  <v-dialog v-model="dialog" width="550" scrollable dark persistent>

    <template v-slot:activator="{ on, attrs }">

        <v-btn @click="handleOpen" icon dark v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
        </v-btn>

    </template>

    <v-card>

      <v-card-title class="text-h5 #1D1D1F">
        Account Information
        <v-spacer></v-spacer>

        <v-btn rounded icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-3" style="min-height: 400px">

        <div class="d-flex justify-center">
            <v-avatar size="120" class="mr-3">
                <v-icon x-large style="font-size : 100px;">
                    mdi-account-circle-outline 
                </v-icon>
            </v-avatar>
        </div>

        <div>
            <center><h2>{{ $store.state.currentUser.name }}</h2></center>
            <center><label>{{ $store.state.currentUser.email }}</label></center>
        </div>

        <div class="pa-5" style="width : 100%">
            
            <v-form @submit="submit" ref="updateForm">

                <v-alert
                    :value="true"
                    type="error"
                    color="error"
                    icon="mdi-alert-circle"
                    dismissible
                    v-if="error != null"
                >
                    {{ error }}
                </v-alert>

                <v-text-field  
                    outlined
                    dense
                    dark
                    label="Full name"
                    v-model="form.name"
                    :rules="[
                        v => !!v || 'Name is required',
                        v => v.length <= 50 || 'Name must be less than 50 characters'
                    ]"
                />

                <v-text-field 
                    outlined
                    dense
                    dark
                    label="Email"
                    readonly
                    v-model="email"
                />

                <div class="d-flex justify-space-between"  >
                    <v-btn type="submit" color="purple" outlined rounded dark>Update</v-btn>
                    <v-btn outlined color="red" rounded dark @click="handleLogout">LOGOUT</v-btn>
                </div>


            </v-form>

        </div>

      </v-card-text>

    </v-card>

  </v-dialog>

</template>

<script>

import Auth from '../../Repository/Auth';

export default {

    created(){
        this.form.name = this.$store.state.currentUser.name;
        this.email = this.$store.state.currentUser.email;
    },

    data(){
        return {
            dialog : false,
            error : null,
            email : null,
            form : {
                name : null,
            }
        }
    },

    methods : {

        async submit(e){
            
            e.preventDefault();

            try{
                this.error = null;
                let res = await Auth.updateAccount(this.form);
                this.$store.commit('setCurrentUser' , res.data.user);
                this.dialog = false;
            }catch(e){
                this.error = e.response.data.message;
            }

        },

        async handleLogout(){

            try{
                let res = await Auth.logout();
                this.$store.commit('setCurrentUser', null);
                this.$router.push('/login');
            }catch(err){
                console.log(err);
            }

        },

        handleOpen(){
            this.form.name = this.$store.state.currentUser.name;
            this.email = this.$store.state.currentUser.email;
        }

    }

};
</script>