<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="650"
      dark
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn outlined dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-plus</v-icon>Upload
        </v-btn>

      </template>

      <SelectFile v-if="!file" @fileSelected="handleFileSelected" />
      <SetParameters v-if="showSetParameters" :file="file" @doUpload="handleDoUpload" />
      <UploadProgress  v-if="uploadProgressShow" :uploadedValue="progress"  />
      <UploadResults v-if="showUploadResult" />

    </v-dialog>

  </div>
</template>


<script>

  import SetParameters from './UploadFile/SetParameters.vue';
  import SelectFile from './UploadFile/SelectFile.vue'
  import UploadProgress from './UploadFile/UploadProgress.vue';
  import UploadResults from './UploadFile/UploadResults.vue';


  import api from '../../API';
  import Resumable from 'resumablejs';

  export default {

    watch: {
      chunks(n, o) {
        if (n.length > 0) {
          this.upload();
        }
      },

    },

    created(){

      // this.r = new Resumable({

      //   target:'http://127.0.0.1:8000/api/upload-file', 

      //   maxFiles : 1,
      //   chunkSize: 1 * 1024 * 1024,
      //   testChunks : false,
      //   throttleProgressCallbacks : 1


      // });

      // this.r.on('fileSuccess', function(file,message){
      //   let response = JSON.parse(message);
      //   console.log('the res is ' , response);
      // });

      // this.r.on('fileProgress', function (file) {

      //   console.log('the progress ' , r.progress() * 100);
      //   this.progress = r.progress() * 100;

      // });

      // this.r.on('fileError', function(file, message){
      //   console.log('the error is ' , message);
      // });


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
        uploaded: 0,
        r : null
      }
    },

    computed: {

      progress() {
        return Math.floor((this.uploaded * 100) / this.file.size);
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

        // this.r.addFile(this.file);

        // console.log("it ran : " , this.r);

        // this.r.opts.query.isPasswordProtected = this.$store.state.currentFileData.havePassword;
        // this.r.opts.query.password = this.$store.state.currentFileData.password;
        // this.r.opts.query.isDayExpired = this.$store.state.currentFileData.expireDateAdded;
        // this.r.opts.query.expired_at = this.$store.state.currentFileData.expireDate;
        // this.r.opts.query.isDownloadExpired = this.$store.state.currentFileData.expireCountAdded;
        // this.r.opts.query.download_expired_at = this.$store.state.currentFileData.expireCount;
        
        // this.r.upload();

        this.createChunks();
        

      },

      // wait some time for resolve the too many request error
      wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
      },

      async upload() {

        try{

          let response = await api.post('/api/upload-file' , this.formData , {

            headers : {
              'Content-Type': 'application/octet-stream'
            },

            onUploadProgress : event => {
              this.uploaded += event.loaded;
            }
          });

          // resolve too many requests error
          await this.wait(1000);
          

          this.chunks.shift();
          console.log(response);

          if(response.data.success){
            this.showUploadResult = true;
            this.uploadProgressShow = false;
            this.$store.commit('setUploadedFile', response.data.uploadedFile);
          }

        }catch(e){
          console.log(e);
        }

      },

      createChunks() {
        let size = 2048 *1000 , chunks = Math.ceil(this.file.size / size);

        for (let i = 0; i < chunks; i++) {
          this.chunks.push(this.file.slice(i * size, Math.min(i * size + size, this.file.size), this.file.type));
        }

      }

    }

  }
</script>