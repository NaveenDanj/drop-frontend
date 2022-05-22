<template>
  <v-dialog v-model="dialog" width="650" scrollable dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab outlined dark v-bind="attrs" v-on="on">
        <v-icon>mdi-post-outline </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 #1D1D1F">
        Change Log - v1.1.0
        <v-spacer></v-spacer>

        <v-btn rounded icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-3" style="height : 400px;">
        <!-- drag and drop file or click to open file dialog -->

        <div>

            <div class="ma-2">
                <label >Update 1.1.0: The update addresses this security issue.</label><br/>
                <label>Release Date : 28/05/2022 </label><br/>
            </div>
            
            <v-divider></v-divider>
            
            <div class="pa-2">
                <p>Welcome to the May 2022 release of DROP. There are many updates in this version that we hope you'll like, some of the key highlights include:</p>
            </div>

            <div>

                <ul>
                    <li>Add new Dashboard to registered users.</li>
                    <li>Registered users can upload permeant files.</li>
                    <li>Registered users can see their uploaded files.</li>
                    <li>Add page to see release logs / release notes.</li>
                    <li>Added 404 page.</li>
                </ul>

            </div>


        </div>
        
        

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>