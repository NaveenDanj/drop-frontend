<template>
    
    <div style=" background-color : #1D1D1F; min-height : 100vh; overflow-y:hidden" class="d-flex justify-center align-center">
        
        <v-container class="" style="border: 1px solid #27272A; width : 30%; min-width : 350px; color : #A6A6A6"   >
            
            <div class="d-flex justify-center">
                <img src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"  style="width : 200px; " />
            </div>

            <div class="d-flex justify-center mt-5">
                <h1>Sign In</h1>
            </div>

            <div class="d-flex justify-center mt-5">
                <p>Login to stay connected.</p>
            </div>

            <v-form @submit="submit">

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

                <v-text-field type="email" v-model="form.email" outlined dense placeholder="Email" color="#A6A6A6" dark/>
                <v-text-field type="password" v-model="form.password" outlined dense placeholder="Password" color="#A6A6A6" dark/>

                <div class="d-flex justify-space-between" >
                    <!-- remember me radio button -->
                    <v-checkbox label="Remember me" color="#A6A6A6" dark/>
                    <label class="my-auto">Forgot Password</label>
                </div>

                <div class="d-flex justify-center" >
                    <v-btn type="submit" color="purple" rounded dark>Sign In</v-btn>
                </div>

                <div class="d-flex justify-center mt-5" >
                    <label class="my-auto">Create an Account</label> <label class="ml-1 blue--text" @click="() => $router.push('/register')">Sign Up</label>
                </div>


            </v-form>
            

        </v-container>


    </div>


</template>

<script>

import Auth from '../../Repository/Auth';

export default {
    
    data(){

        return {
            form : {
                email : '',
                password : ''
            },

            error : null
        }

    },

    methods : {

        async submit(e){
            e.preventDefault();

            try{
                this.error = null;
                let res = await Auth.login(this.form);
                console.log(res);
                localStorage.setItem('token' , res.data.token);
                this.$store.commit('setCurrentUser' , res.data.user);
                this.$router.push('/dashboard');
            }catch(err){
                console.log(err.response.data.message);
                this.error = err.response.data.message;
            }


        }

    }

}
</script>