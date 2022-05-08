<template>
  <v-card>
    <v-card-title class="text-h5 #1D1D1F"> Upload File </v-card-title>

    <v-divider></v-divider>

    <v-card-text @dragover.prevent @drop.prevent class="pa-2">
      <!-- drag and drop file or click to open file dialog -->
      <input
        ref="fileField"
        style="display: none"
        type="file"
        @change="handleChange"
      />
      <div
        @drop="dragFile"
        style="border: 1px dashed white; height: 200px"
        class="d-flex justify-center align-center"
      >
        <div>
          <label>Drag the file over here to upload</label><br /><br />
          <center>
            <v-btn outlined @click="handleOpenSelectFileDialog"
              >Or Choose File</v-btn
            >
          </center>
        </div>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },

  methods: {
    dragFile(e) {
      e.preventDefault();
      this.file = e.dataTransfer.files[0];
      this.$store.state.currentFileData.file = this.file;
      console.log(this.file);
      this.$emit('fileSelected', this.file);
    },

    handleChange(e) {
      this.file = e.target.files[0];
      this.$store.state.currentFileData.file = this.file;
      console.log("ch" , this.$store.state.currentFileData.file);
      this.$emit('fileSelected', this.file);
    },

    handleOpenSelectFileDialog() {
      this.$refs.fileField.click();
    },
  },
};
</script>