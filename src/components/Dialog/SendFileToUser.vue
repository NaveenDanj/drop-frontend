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
                    <v-icon x-large style="font-size : 100px;">
                    mdi-file
                    </v-icon>
                </v-avatar>
            </div>

            <div class="my-auto" style="width : 100%">
                <h3 class="my-auto">My file.xd</h3>
                <label>File ID - 62939a4836d98</label>
            </div>
          

        </div>


        <v-form>

            <v-text-field 
                dark 
                outlined 
                dense 
                label="Email"
            />

            <v-text-field 
                dark 
                outlined 
                dense 
                label="Subject"
            />

            <v-textarea 
                dark 
                outlined 
                dense 
                label="Message"
            ></v-textarea>

            <v-btn 
              color="purple" 
              dark 
              class="mt-3"
              outlined
              rounded
            >
              Send
            </v-btn>


        </v-form>
      </v-card-text>

    </v-card>

  </v-dialog>
</template>

<script>
export default {
    
    data(){
      return{
        dialog : false
      }
    }

}
</script>