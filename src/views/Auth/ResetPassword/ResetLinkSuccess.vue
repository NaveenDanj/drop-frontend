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
          A email has been send to yout email address. Please check for an email from DROP and click on the included link to reset your password. Please check spam folder if you don't see the email.
        </p>

        <v-btn
          outlined
          color="success"
          rounded
          @click="() => $router.push('/')"
        >
          Back
        </v-btn>
      </center>
    </v-container>
  </div>
</template>