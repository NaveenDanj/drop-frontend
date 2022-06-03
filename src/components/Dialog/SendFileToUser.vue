<template>
  <v-dialog v-model="dialog" width="550" scrollable dark persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon dark v-bind="attrs" v-on="on">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 #1D1D1F">
        Send to Someone
        <v-spacer></v-spacer>

        <v-btn rounded icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-3" style="min-height: 300px">
        <div class="d-flex">
          <div>
            <v-avatar size="120" class="">
              <v-icon x-large style="font-size: 100px"> mdi-file </v-icon>
            </v-avatar>
          </div>

          <div class="my-auto" style="width: 100%">
            <h3 class="my-auto">{{ fileData.original_name }}</h3>
            <label>File ID - {{fileData.fileID}}</label>
          </div>
        </div>

        <v-form ref="form" @submit="handleSubmit">

          <v-alert
            :value="true"
            type="error"
            color="error"
            icon="mdi-alert-circle"
            dismissible
            v-if="error != null"
          >
            {{ error }}
          </v-alert>


          <v-text-field
            dark
            outlined
            dense
            label="Email"
            v-model="form.to_email"
            :rules="[
              v => !!v || 'Email is required!',
              v => /.+@.+\..+/.test(v) || 'Email must be valid'
            ]"
          />

          <v-text-field
            dark
            outlined
            dense
            label="Subject"
            v-model="form.subject"
            :rules="[
              v => v.length <= 50 || 'Must be less than 50 characters',
            ]"
            :counter="50"
          />

          <v-textarea
            dark
            outlined
            dense
            label="Message"
            v-model="form.message"
            :rules="[
              v => v.length <= 50 || 'Must be less than 50 characters',
            ]"
            :counter="512"
          ></v-textarea>

          <v-btn type="submit" color="purple" dark class="mt-3" outlined rounded>
            Send
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import FileHandle from '../../Repository/FileHandle';

export default {

  props : ['fileID' , 'fileData'],

  data() {
    return {
      dialog: false,
      form: {
        to_email: '',
        subject: '',
        message: '',
        file_id : this.fileID
      },
      error : null
    };
  },


  methods : {

    async handleSubmit(e){
      e.preventDefault();

      if(this.$refs.form.validate()){
        console.log('form submitted!');

        try{
          console.log('the file id is : ' , this.form.file_id);
          this.err = null;

          let res_form = {
            to_email : this.form.to_email,
            ...(this.form.subject != '') && {subject : this.form.subject},
            ...(this.form.message != '') && {message : this.form.message},
            file_id : +this.fileID
          }

          let res = await FileHandle.sendFile(res_form);

          this.dialog = false;
          this.form.to_email = '';
          this.form.subject = '';
          this.form.message = '';

        }catch(err){
          this.error = err.response.data.message;
        }

      }

    }


  }


};
</script>