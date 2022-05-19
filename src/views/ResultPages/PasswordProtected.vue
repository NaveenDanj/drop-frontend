<template>
    
    <div style=" background-color : #1D1D1F; min-height : 100vh; overflow-y:hidden" class="d-flex justify-center align-center">
        
        <v-container class="" style="border: 1px solid #27272A; width : 30%; min-width : 350px; color : #A6A6A6"   >
            
            <div class="d-flex justify-center">
                <img src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"  style="width : 200px; " />
            </div>

            <div class="d-flex justify-center mt-5">
                <h1>Password Protected</h1>
            </div>

            <div class="d-flex justify-center mt-5">
                <p>Enter the password to download the file</p>
            </div>

            <v-form @submit="submit">

                <v-alert
                    type="error"
                    color="error"
                    icon="mdi-alert-circle"
                    dismissible
                    v-if="error != null"
                >
                    {{ error }}
                </v-alert>

                <v-text-field type="password" v-model="form.password" outlined dense placeholder="Password" color="#A6A6A6" dark required/>

                
                <div class="d-flex justify-center" >
                    <v-btn type="submit" color="purple" rounded dark>Download</v-btn>
                </div>

            </v-form>
            

        </v-container>


    </div>


</template>



<script>

import FileHandle from '../../Repository/FileHandle'

export default {
    
    data(){

        return{
            form : {
                password : null,
                linkid  : this.$route.params.fileid,
            },
            error : null,

        }

    },

    methods : {

        async submit(e){
            e.preventDefault();
            this.error = null;

            try{
                let data = await FileHandle.checkPassword(this.form);
                console.log(data);

                if(data.status == 200){
                    let back = process.env.VUE_APP_BACKEND
                    window.location.href = `${back}/api/get-password-file/${this.form.linkid}/${data.data.token}/${this.form.password}`;

                }else{
                    this.error = data.data.message;
                }

            }catch(e){
                console.log(e);
                this.error = e.response.data.error || e.response.data.message;
            }

        }

    }

}
</script>