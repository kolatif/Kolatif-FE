<template>
  <nav>
    <v-app-bar color="white" elevate-on-scroll class="px-12" fixed app>
      <v-toolbar-title>
        <nuxt-link to="/mentors">
          <img
            src="~/assets/images/logo.png"
            alt="image"
            style="max-width: 100px"
          />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="text-none mr-2" color="primary" to="/mentors"
        >Mentors</v-btn
      >
      <v-btn text color="primary" class="text-none mr-2" to="/sessions"
        >Sessions</v-btn
      >
      <v-btn text color="primary" class="text-none mr-2" to="/events"
        >Events</v-btn
      >
      <v-btn text color="primary" class="text-none mr-2" to="/faq">FAQ</v-btn>
      <v-btn class="text-none" text color="primary" fab small to="/profile">
        <v-icon large>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
