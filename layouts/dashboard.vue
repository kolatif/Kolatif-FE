<template>
  <v-app>
    <DashboardNav />
    <v-main>
      <nuxt class="grey lighten-4" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Footer'
import DashboardNav from '../components/DashboardNav'
export default {
  components: {
    DashboardNav,
    Footer,
  },
}
</script>
