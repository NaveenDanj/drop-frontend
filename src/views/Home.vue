
<template>
  <div style="min-height: 100vh" class="gradient-background">

    <div v-if="$store.state.currentUser == null" class="d-flex pr-5 pt-5">
      <v-spacer></v-spacer>
      
      <v-btn class="mr-5" icon dark  fab outlined @click="() => $router.push('/login')">
        <v-icon class="white--text"> mdi-login-variant</v-icon>
      </v-btn>

      <v-btn icon dark  fab outlined @click="() => $router.push('/register')">
        <v-icon class="white--text">mdi-account-plus</v-icon>
      </v-btn>

    </div>

    <div v-else class="d-flex pr-5 pt-5">
      <v-spacer></v-spacer>
      
      <v-btn class="mr-5" icon dark  fab outlined @click="() => $router.push('/dashboard')">
        <v-icon class="white--text"> mdi-home</v-icon>
      </v-btn>

      <v-btn icon dark  fab outlined @click="handleLogout">
        <v-icon class="white--text">mdi-logout-variant </v-icon>
      </v-btn>
      
    </div>


    <div style="min-height: 100vh" class="d-flex justify-center align-center">
      <div style="width: 100%">
        <UploadFileHomePage /><br />
        <!-- <center><label style="color : white; font-size : 20px;">Upload</label></center> -->
        <center>
          <div
            style="color: white; width: 50%"
            class="d-flex justify-space-between"
          >
            <!-- <v-btn icon dark x-large fab outlined @click="() => $router.push('/login')">
          <v-icon class="white--text"> mdi-login-variant</v-icon>
        </v-btn>

        <h3>DROP</h3>

        <v-btn icon dark x-large fab outlined @click="() => $router.push('/register')">
          <v-icon class="white--text">mdi-account-plus</v-icon>
        </v-btn> -->

            <p>
              DROP is the simplest way to send your files around the world.
              Share large files and photos. Transfer for free. File sharing made
              easy!
            </p>
          </div>
        </center>
      </div>

    </div>

  </div>

</template>

<script>
import UploadFileHomePage from "../components/Dialog/UploadFileHomePage.vue";
import Auth from '../Repository/Auth';

export default {
  components: {
    UploadFileHomePage,
  },

  name: "Home",

  methods : {

    async handleLogout(){

      try{
        let res = await Auth.logout();
        this.$router.push('/login');
      }catch(err){
        console.log(err);
      }

    }

  }


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