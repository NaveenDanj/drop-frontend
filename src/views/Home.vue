
<template>
  <div style="min-height: 100vh" class="gradient-background d-flex justify-center align-center" >
    
    <div style="width : 100%">
      <UploadFileHomePage /><br/>
      <!-- <center><label style="color : white; font-size : 20px;">Upload</label></center> -->
      <center><div style="color : white; width : 50%" class="d-flex justify-space-between"  >

        <v-btn icon dark x-large fab outlined @click="() => $router.push('/login')">
          <v-icon class="white--text"> mdi-login-variant</v-icon>
        </v-btn>

        <h3>DROP</h3>

        <v-btn icon dark x-large fab outlined @click="() => $router.push('/register')">
          <v-icon class="white--text">mdi-account-plus</v-icon>
        </v-btn>


      </div></center>
    </div>

  </div>
</template>

<script>

import UploadFileHomePage from '../components/Dialog/UploadFileHomePage.vue';

export default {

  components : {
    UploadFileHomePage
  },

  name: "Home",

};

</script>



<style scoped>
.gradient-background {
  background: linear-gradient(300deg, deepskyblue, darkviolet, blue);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>