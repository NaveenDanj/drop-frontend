<template>
    
    <div style=" background-color : #1D1D1F; min-height : 100vh; overflow-y:hidden" >

        <v-container style="min-height : 100vh" class="d-flex justify-center align-center">
            <div>
                <center><img src="https://templates.iqonic.design/cloudbox/html/assets/images/error/02.png" width="300"/></center>
                <center><h1 style="color:white;font-size : 35px;" class="mt-5">We are Currently Performing Maintenance</h1></center>
                <center><label style="color : white;">Please check back in sometime.</label></center>
                <center>
                    <v-btn
                        class="mt-5"
                        outlined
                        rounded
                        color="red"
                        @click="() => $router.push('/') "
                    >
                        Back
                    </v-btn>
                </center>
            </div>
            
        </v-container>
            
    </div>

</template>