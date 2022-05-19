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

            <v-form>

                <v-text-field outlined dense placeholder="Email" color="#A6A6A6" dark/>
                <v-text-field outlined dense placeholder="Password" color="#A6A6A6" dark/>

                <div class="d-flex justify-space-between" >
                    <!-- remember me radio button -->
                    <v-checkbox label="Remember me" color="#A6A6A6" dark/>
                    <label class="my-auto">Forgot Password</label>
                </div>

                <div class="d-flex justify-center" >
                    <v-btn color="purple" rounded dark>Sign In</v-btn>
                </div>

                <div class="d-flex justify-center mt-5" >
                    <label class="my-auto">Create an Account</label> <label class="ml-1 blue--text" @click="() => $router.push('/register')">Sign Up</label>
                </div>


            </v-form>
            

        </v-container>


    </div>


</template>