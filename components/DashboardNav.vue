<template>
  <nav>
    <v-app-bar color="white" elevate-on-scroll class="px-12" fixed app>
      <v-toolbar-title>
        <img
          src="~/assets/images/logo.png"
          alt="image"
          style="max-width: 100px"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="text-none mr-2" color="primary" to="/mentors"
        >Mentors</v-btn
      >
      <v-btn text color="primary" class="text-none" to="/sessions"
        >Sessions</v-btn
      >
      <v-btn class="text-none" text color="primary" fab small>
        <v-icon large>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
