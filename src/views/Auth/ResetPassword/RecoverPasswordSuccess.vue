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
        min-width: 400px;
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
        <h1 style="font-size: 50px">Success !</h1>
      </div>

      <center>
        <p>
          Password has been reset successfully. You can now login with your new password.
        </p>

        <v-btn
          outlined
          color="success"
          rounded
          @click="() => $router.push('/login')"
        >
          Login
        </v-btn>
      </center>
    </v-container>
  </div>
</template>