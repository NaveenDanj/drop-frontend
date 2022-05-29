<template>
    
    <div style=" background-color : #1D1D1F; min-height : 100vh; overflow-y:hidden" class="d-flex justify-center align-center">
        
        <v-container class="" style="border: 1px solid #27272A; width : 30%; min-width : 350px; color : #A6A6A6"   >
            
            <div class="d-flex justify-center">
                <img src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"  style="width : 200px; " />
            </div>

            <div class="d-flex justify-center mt-5">
                <h1>Sign Up</h1>
            </div>

            <div class="d-flex justify-center mt-5">
                <p>Create your account.</p>
            </div>

            <v-form ref="registerForm" @submit="submit">

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
                    v-model="form.name"
                    outlined
                    dense
                    placeholder="Display Name"
                    color="#A6A6A6"
                    dark
                    :rules="[
                        v => !!v || 'Name is required',
                        v => v.length <= 20 || 'Name must be less than 20 characters'
                    ]"
                />

                <v-text-field
                    v-model="form.email"
                    outlined
                    dense
                    placeholder="Email"
                    color="#A6A6A6"
                    dark
                    :rules="[
                        v => !!v || 'Email is required',
                        v => /.+@.+\..+/.test(v) || 'Email must be valid'
                    ]"
                />

                <v-row>

                    <v-col cols="12" md="6" >
                        <v-text-field
                            type="password"
                            v-model="form.password"
                            outlined
                            dense
                            placeholder="Password"
                            color="#A6A6A6"
                            dark
                            :rules="[
                                v => !!v || 'Password is required',
                                v => v.length >= 6 || 'Password must be at least 6 characters'
                            ]"
                        />
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field
                            type="password"
                            v-model="form.password_confirmation"
                            outlined
                            dense
                            placeholder="Confirm Password"
                            color="#A6A6A6"
                            dark
                            :rules="[
                                v => !!v || 'Password confirmation is required',
                                v => v === form.password || 'Password confirmation must match password'
                            ]"
                        />
                    </v-col>

                </v-row>

                <!-- agreement  -->
                <div class="">
                    <v-checkbox label="I agree to the terms and conditions" color="#A6A6A6" dark/>
                </div>


                <div class="d-flex justify-center" >
                    <v-btn type="submit" color="purple" rounded dark>Sign Up</v-btn>
                </div>

                <div class="d-flex justify-center mt-5" >
                    <label class="my-auto">Already have an Account? </label> <label class="ml-1 blue--text" @click="() => $router.push('/login')">Sign In</label>
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
                name : '',
                email : '',
                password : '',
                password_confirmation : ''
            },

            error : null
        }
    },

    methods : {

        async submit(e){
            e.preventDefault();
            
            if(!this.$refs.registerForm.validate()){
                return;
            }

            this.error = null;

            try{

                let res = await Auth.register(this.form);
                console.log(res);
                localStorage.setItem('token' , res.data.token);
                this.$store.commit('setCurrentUser' , res.data.user);
                this.$router.push('/dashboard');
            }catch(e){
                this.error = e.response.data.message;
            }

        }

    }


}
</script>