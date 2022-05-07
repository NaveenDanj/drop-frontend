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
      <UploadProgress  v-if="uploadProgressShow" />

    </v-dialog>

  </div>
</template>


<script>

  import SetParameters from './UploadFile/SetParameters.vue';
  import SelectFile from './UploadFile/SelectFile.vue'
  import UploadProgress from './UploadFile/UploadProgress.vue';

  export default {

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
      }
    },

    methods : {

      handleFileSelected(file){
        this.file = file;
        this.showSetParameters = true;
      },

      handleDoUpload(){
        this.showSetParameters = false;
        this.uploadProgressShow = true;
      }

    }

  }
</script>