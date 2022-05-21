<template>
  <div style="background-color: #1d1d1f; min-height: 100vh; overflow-y: hidden">
    <v-container
      style="min-height: 100vh"
      class="d-flex justify-center align-center"
    >
      <div>
        <center>
          <img
            src="error.png"
            width="300"
          />
        </center>
        <center>
          <h1 style="color: white; font-size: 35px" class="mt-5">
            Oops! Something went wrong!
          </h1>
        </center>
        <center>
          <label style="color: white">
            Something went wrong. Please try again later. If the problem persists, please contact us. Thank you.
          </label>
        </center>
        <center>
          <v-btn
            class="mt-5"
            outlined
            rounded
            color="red"
            @click="() => $router.push('/')"
          >
            Back
          </v-btn>
        </center>
      </div>
    </v-container>
  </div>
</template>