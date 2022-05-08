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

    </v-dialog>

  </div>
</template>


<script>

  import SetParameters from './UploadFile/SetParameters.vue';
  import SelectFile from './UploadFile/SelectFile.vue'
  import UploadProgress from './UploadFile/UploadProgress.vue';

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
      UploadProgress
    },

    data () {
      return {
        dialog: false,
        file : null,
        uploadProgressShow : false,
        showSetParameters : false,
        chunks: [],
        uploaded: 0
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
        this.createChunks();
      },

      async upload() {

        // axios(this.config).then(response => {
        //   this.chunks.shift();
        // }).catch(error => {});

        try{

          let response = await api.post('/api/upload-file' , this.formData , {

            headers : {
              'Content-Type': 'multipart/form-data'
            },

            onUploadProgress : event => {
              this.uploaded += event.loaded;
            }
          });

          this.chunks.shift();
          console.log(response);

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