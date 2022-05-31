<template>

  <v-dialog v-model="dialog" width="650" scrollable dark persistent>

    <template v-slot:activator="{ on, attrs }">

        <v-btn icon dark v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
        </v-btn>

    </template>

    <v-card>

      <v-card-title class="text-h5 #1D1D1F">
        Account Information
        <v-spacer></v-spacer>

        <v-btn rounded icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-3" style="min-height: 400px">

        <div class="d-flex justify-center">
            <v-avatar size="120" class="mr-3">
                <v-icon x-large style="font-size : 100px;">
                    mdi-account-circle-outline 
                </v-icon>
            </v-avatar>
        </div>

        <div>
            <center><h2>Naveen Hettiwaththa</h2></center>
            <center><label>naveenhettiwaththa@gmail.com</label></center>
        </div>

        <div class="pa-5" style="width : 100%">
            
            <v-form>
                <v-text-field  outlined dense dark label="Full name" />
                <v-text-field  outlined dense dark label="Email" readonly />
                <v-btn color="purple" outlined rounded dark>Update</v-btn>
            </v-form>

        </div>

      </v-card-text>

    </v-card>

  </v-dialog>

</template>

<script>
export default {

    data(){
        return {
            dialog : false
        }
    }

};
</script>