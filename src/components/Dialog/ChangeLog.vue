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

      <v-card-text class="pa-3" style="height: 400px">
        <ChangeLogRecord />
        <ChangeLogRecord />
        <ChangeLogRecord />
        <ChangeLogRecord />
        <ChangeLogRecord />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    
  </v-dialog>
</template>

<script>
import ChangeLogRecord from "./ChangeLog/ChangeLogRecord.vue";

export default {

  components: {
    ChangeLogRecord,
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>