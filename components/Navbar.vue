<template>
  <div>
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
        <v-btn outlined class="text-none mr-2" color="primary" to="/login"
          >Login</v-btn
        >
        <v-btn color="primary" class="text-none" to="/register">Register</v-btn>
      </v-app-bar>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style></style>
