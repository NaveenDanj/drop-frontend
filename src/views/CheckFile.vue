<template>
  <div
    style="background-color: #1d1d1f; min-height: 100vh; overflow-y: hidden"
    class="d-flex justify-center align-center"
  >
    <v-container
      class=""
      style="
        border: 1px solid #27272a;
        width: 30%;
        min-width: 350px;
        color: #a6a6a6;
      "
    >
      <div class="d-flex justify-center">
        <img
          src="https://templates.iqonic.design/cloudbox/html/assets/images/logo-white.png"
          style="width: 200px"
        />
      </div>

      <div class="d-flex justify-center mt-5">
        <h1 style="font-size: 20px">Wait a moment...</h1>
      </div>
    </v-container>
  </div>
</template>

<script>
import FileHandle from "../Repository/FileHandle";

export default {
  async created() {
    try {
      let fileid = this.$route.params.fileid;
      let data = await FileHandle.checkFile(fileid);
      console.log(data);

      // check if password protected
      if (data.data.file.isPasswordProtected) {
        this.$router.push(`/passwordprotected/${data.data.file.fileID}`);
        return;
      }

      if (data.status) {
        this.$router.push(`/success/${data.data.file.fileID}`);
        return;
      }
    } catch (err) {
      if (err.response.status != 200) {
        this.$router.push("/filenotfound");
      }
    }
  },
};
</script>