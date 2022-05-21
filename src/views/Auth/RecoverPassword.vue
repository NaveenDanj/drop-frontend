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
                <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
            </div>

            <v-form class="mt-5">

                <v-alert
                    :value="true"
                    type="error"
                    color="error"
                    icon="mdi-alert-circle"
                    dismissible
                >
                    err
                </v-alert>

                <v-text-field type="email"  outlined dense placeholder="Email" color="#A6A6A6" dark/>

                

                <div class="d-flex justify-center" >
                    <v-btn type="submit" color="purple" rounded dark>Reset</v-btn>
                </div>


            </v-form>
            

        </v-container>


    </div>


</template>
