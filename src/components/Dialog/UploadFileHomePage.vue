<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="650"
      dark
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
            outlined
            dark
            fab
            x-large
            v-bind="attrs" v-on="on"
        >
            <v-icon>mdi-upload</v-icon>
        </v-btn>

      </template>

      <SelectFile v-if="!file" @fileSelected="handleFileSelected" @close="closeDialog" />
      <SetParameters v-if="showSetParameters" :file="file" @doUpload="handleDoUpload" />
      <UploadProgress  v-if="uploadProgressShow" :uploadedValue="progress"  />
      <UploadResults v-if="showUploadResult" @close="closeDialog" />

    </v-dialog>

  </div>
</template>


<script>

  import SetParameters from './UploadFile/SetParameters.vue';
  import SelectFile from './UploadFile/SelectFile.vue'
  import UploadProgress from './UploadFile/UploadProgress.vue';
  import UploadResults from './UploadFile/UploadResults.vue';


  import api from '../../API';

  export default {

    watch: {
      chunks(n, o) {
        if (n.length > 0) {
          this.upload();
        }
      },

    },

    components : {
      SetParameters,
      SelectFile,
      UploadProgress,
      UploadResults
    },

    data () {
      return {
        dialog: false,
        file : null,
        uploadProgressShow : false,
        showSetParameters : false,
        showUploadResult : false,
        chunks: [],
        chunkCount : 0,
        uploaded: 0,
        r : null
      }
    },

    computed: {

      progress() {
        let f = (this.chunkCount - this.chunks.length) * 100;
        return Math.floor( f / this.chunkCount );
      },

      formData() {
        let formData = new FormData();
        formData.append('is_last', this.chunks.length === 1);
        formData.append('file', this.chunks[0], `${this.file.name}.part`);

        if(this.chunks.length === 1){
          formData.append('isPasswordProtected' , this.$store.state.currentFileData.havePassword);
          formData.append('password' , this.$store.state.currentFileData.password);
          formData.append('isDayExpired' , this.$store.state.currentFileData.expireDateAdded);
          formData.append('expired_at' , this.$store.state.currentFileData.expireDate);
          formData.append('isDownloadExpired' , this.$store.state.currentFileData.expireCountAdded);
          formData.append('download_expired_at' , this.$store.state.currentFileData.expireCount);
        }

        return formData;
      },

    },

    methods : {

      closeDialog(){
        this.dialog = false;
        this.file = null;
        this.showSetParameters = false;
        this.showUploadResult = false;
        this.uploadProgressShow = false;
        this.chunks = [];
        this.uploaded = 0;
        
      },

      handleFileSelected(file){
        this.file = file;
        this.showSetParameters = true;
      },

      handleDoUpload(){
        this.showSetParameters = false;
        this.uploadProgressShow = true;
        this.handleUpload();
      },

      handleUpload(){
        this.createChunks();
      },

      closeDialog(){
        this.dialog = false;
        this.file = null;
        this.showSetParameters = false;
        this.showUploadResult = false;
        this.uploadProgressShow = false;
        this.chunks = [];
        this.uploaded = 0;
        
      },

      // wait some time for resolve the too many request error
      wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
      },

      async upload() {

        try{

          let response = await api.post('/api/upload-file' , this.formData , {

            headers : {
              'Content-Type': 'application/octet-stream',
              'Access-Control-Allow-Origin' : '*',
              "Access-Control-Allow-Credentials" : true,
            },

            onUploadProgress : event => {
              this.uploaded += event.loaded;
            }
          });

          // resolve too many requests error
          await this.wait(1000);
          this.chunks.shift();

          if(response.data.success){
            this.showUploadResult = true;
            this.uploadProgressShow = false;
            this.$store.commit('setUploadedFile', response.data.uploadedFile);
          }

        }catch(e){
          console.log(e);
          this.$router.push('/error');
        }

      },

      createChunks() {
        let size = 2048 *1000 , chunks = Math.ceil(this.file.size / size);
        this.chunkCount = chunks;

        for (let i = 0; i < chunks; i++) {
          this.chunks.push(this.file.slice(i * size, Math.min(i * size + size, this.file.size), this.file.type));
        }

      }

    }

  }
</script>