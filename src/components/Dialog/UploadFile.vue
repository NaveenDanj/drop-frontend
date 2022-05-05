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
      <SetParameters v-if="file" />

    </v-dialog>

  </div>
</template>


<script>

  import SetParameters from './UploadFile/SetParameters.vue';
  import SelectFile from './UploadFile/SelectFile.vue'


  export default {

    components : {
      SetParameters,
      SelectFile
    },

    data () {
      return {
        dialog: false,
        file : null
      }
    },

    methods : {

      handleFileSelected(file){
        this.file = file;
      }

    }

  }
</script>