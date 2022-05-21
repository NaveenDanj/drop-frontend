<template>
    
    <div style=" background-color : #1D1D1F; min-height : 100vh; overflow-y:hidden" class="d-flex justify-center align-center">
        
        <v-container class="" style="border: 1px solid #27272A; width : 30%; min-width : 350px; color : #A6A6A6"   >
            
            <div class="d-flex justify-center">
                <img src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"  style="width : 200px; " />
            </div>

            <div class="d-flex justify-center mt-5">
                <h1 style="color:white;font-size : 30px;">Reset Password</h1>
            </div>

            <div class="d-flex justify-center mt-5" style="text-align:center">
                <p>Enter your current password and new password to reset your password.</p>
            </div>

            <v-form class="mt-5" @submit="submit" ref="rForm">

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


                <v-text-field 
                    type="text"
                    outlined
                    dense
                    placeholder="New Password"
                    color="#A6A6A6"
                    dark
                    :rules="[
                        v => !!v || 'Password is required',
                        v => v.length >= 6 || 'Password must be at least 6 characters'
                    ]"
                    v-model="form.password"
                />
                <v-text-field
                    type="text"
                    outlined
                    dense
                    placeholder="Comfirm Password"
                    color="#A6A6A6"
                    dark
                    :rules="[
                        v => !!v || 'Comfirm Password is required',
                        v => v.length >= 6 || 'Password must be at least 6 characters',
                        v => v === form.password || 'Passwords do not match'
                    ]"
                    v-model="form.password_confirmation"
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
        return {

            form : {
                email : null,
                password : '',
                password_confirmation : '',
                token : this.$route.params.token
            },

            error : null

        }
    },

    methods : {

        async submit(e){

            e.preventDefault();

            try{

                if(this.$refs.rForm.validate()){
                    this.error = null;
                    let res = await Auth.resetPassword(this.form);
                    this.$router.push('/recoverpasswordsuccess');                    
                }

            }catch(e){
                this.error = e.response.data.message;
            }


        }


    }


}
</script>