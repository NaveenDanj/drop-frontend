<template>
    
    <div style=" background-color : #1D1D1F; min-height : 100vh; overflow-y:hidden" class="d-flex justify-center align-center">
        
        <v-container class="" style="border: 1px solid #27272A; width : 30%; min-width : 350px; color : #A6A6A6"   >
            
            <div class="d-flex justify-center">
                <img src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"  style="width : 200px; " />
            </div>

            <div class="d-flex justify-center mt-5">
                <h1 style="color:white;font-size : 30px;">Recover Password</h1>
            </div>

            <div class="d-flex justify-center mt-5" style="text-align:center">
                <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
            </div>

            <v-form ref="rForm" class="mt-5" @submit="submit">

                <v-alert
                    :value="true"
                    type="error"
                    color="error"
                    icon="mdi-alert-circle"
                    dismissible
                    v-if="error"
                >
                    {{ error }}
                </v-alert>

                <v-progress-linear
                    :active="loading"
                    color="deep-purple accent-4"
                    indeterminate
                    rounded
                    height="6"
                ></v-progress-linear><br />

                <v-text-field
                    type="email"
                    v-model="form.email" 
                    outlined 
                    dense 
                    placeholder="Email" 
                    color="#A6A6A6" 
                    dark
                    :rules="[
                        v => !!v || 'Email is required',
                        v => /.+@.+/.test(v) || 'Email must be valid'
                    ]"
                />

                <div class="d-flex justify-center" >
                    <v-btn type="submit" color="purple" rounded dark>Reset</v-btn>
                </div>

            </v-form>
            
        </v-container>

    </div>

</template>

<script>

import Auth from '../../../Repository/Auth';

export default {
    
    data(){

        return{
            form : {
                email : null
            },
            loading : false,
            error : null,
        }

    },

    methods : {

        async submit(e){

            e.preventDefault();

            if(this.$refs.rForm.validate()){

                try{

                    this.loading = true;
                    let res = await Auth.resetPasswordSendLink(this.form);
                    console.log(res);
                    this.loading = false;
                    this.$router.push('/recoverlinksuccess');

                }catch(e){
                    this.error = e.response.data.message;
                    this.loading = false;
                }
                
            }

        }

    }

}
</script>
