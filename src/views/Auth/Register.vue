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

            <v-form>

                <v-text-field outlined dense placeholder="Display Name" color="#A6A6A6" dark/>
                <v-text-field outlined dense placeholder="Email" color="#A6A6A6" dark/>

                <v-row>

                    <v-col cols="12" md="6" >
                        <v-text-field outlined dense placeholder="Password" color="#A6A6A6" dark/>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field outlined dense placeholder="Confirm Password" color="#A6A6A6" dark/>
                    </v-col>

                </v-row>

                <!-- agreement  -->
                <div class="">
                    <v-checkbox label="I agree to the terms and conditions" color="#A6A6A6" dark/>
                </div>


                <div class="d-flex justify-center" >
                    <v-btn color="purple" rounded dark>Sign Up</v-btn>
                </div>

                <div class="d-flex justify-center mt-5" >
                    <label class="my-auto">Already have an Account? </label> <label class="ml-1 blue--text" @click="() => $router.push('/login')">Sign In</label>
                </div>


            </v-form>
            

        </v-container>


    </div>


</template>