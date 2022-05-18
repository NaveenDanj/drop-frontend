<template>
    
    <div style=" background-color : #1D1D1F; min-height : 100vh; overflow-y:hidden" class="d-flex justify-center align-center">
        
        <v-container class="" style="border: 1px solid #27272A; width : 30%; min-width : 400px; color : #A6A6A6"   >
            
            <div class="d-flex justify-center">
                <img src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"  style="width : 200px; " />
            </div>

            <div class="d-flex justify-center mt-5">
                <h1 style="font-size : 50px;">Success !</h1>
            </div>

            <center>
                <p>
                    Requested file is ready to download. Please click on the button below to start download.
                </p>

                <v-btn
                    outlined
                    color="success"
                    rounded
                    :href="download_link"
                    target="_blank"
                    :disabled="download_link == null"
                >
                    Download
                </v-btn>

            </center>

        </v-container>


    </div>

</template>

<script>
import FileHandle from '../../Repository/FileHandle'

export default {
    
    data(){

        return {
            download_link : null,
        }

    },

    async created(){

        try{

            let fileid = this.$route.params.fileid;
            let fileData = await FileHandle.checkFile(fileid);
            let token = fileData.data.token;
            this.download_link = `http://127.0.0.1:8000/api/getfile/${fileData.data.file.fileID}/${token}`;
        }catch(err){
            console.log(err);
        }

    }


}
</script>