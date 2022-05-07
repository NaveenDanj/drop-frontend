<template>

  <v-card>
    <v-card-title class="text-h6 #1D1D1F">
      <v-icon left>mdi-file</v-icon>
      {{ this.file.name + " " }} {{  (this.file.size / 1000000).toFixed(3) }} MB
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="pa-2">
      
      <v-form>

        <div class="d-flex justify-space-between" >
            <v-text-field
                v-model="password"
                outlined
                dense
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
                :disabled="!allowPassword"
            />

            <!-- add switch -->
            <v-checkbox
              v-model="allowPassword"
              class="my-auto ml-2"
            />

        </div>

        <div class="d-flex justify-space-between" >

          <v-select
            dark
            outlined
            label="Expire After (days)"
            dense
            v-model="fileType"
            :items="[1  , 2 , 5 , 7]"
            prepend-icon="mdi-clock"
            :disabled="!allowExpire"
          />

          <v-checkbox
            v-model="allowExpire"
            class="my-auto ml-2"
          />

        </div>


        <div class="d-flex justify-space-between" >

          <v-select
            dark
            outlined
            label="or After (downloades) "
            dense
            v-model="downloads"
            :items="[1 , 5 , 10]"
            prepend-icon="mdi-download"
            :disabled="!allowDownload"
          />

          <v-checkbox
            v-model="allowDownload"
            class="my-auto ml-2"
          />

        </div>

      </v-form>
    
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        color="primary"
        text
        @click="handleUpload"
      >
        Next
      </v-btn>


    </v-card-actions>
  </v-card>

</template>

<script>
export default {
    
  props : ['file'],

  data(){
    return {
      password : null,
      fileType : 1,
      downloads : 1,
      allowDownload : false,
      allowExpire : false,
      allowPassword : false
    }
  },

  methods : {

    handleUpload(){
      this.$emit('doUpload')
    }


  }

}
</script>