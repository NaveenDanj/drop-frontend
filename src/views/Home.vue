
<template>
  <div style="min-height: 100vh" class="gradient-background d-flex justify-center align-center" >
    
    <div>
      <UploadFileHomePage /><br/>
      <!-- <center><label style="color : white; font-size : 20px;">Upload</label></center> -->
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