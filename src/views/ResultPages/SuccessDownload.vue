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
                    Requested file is ready to download. Download will start automatically. If download does not start, please click the button below.
                </p>

                <v-btn
                    outlined
                    color="success"
                    rounded
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
    
    async created(){

        try{

            let fileid = this.$route.params.fileid

            let fileData = await FileHandle.checkFile(fileid)

            // get filename and extension
            let filename = fileData.data.file.name

            let data = await FileHandle.downloadFile(fileid);
            console.log(data);
            // download file using axios data
            let url = window.URL.createObjectURL( new Blob([data.data] , {type : 'application/octet-stream'}));
            let link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        }catch(err){
            console.log(err);
        }

    }


}
</script>