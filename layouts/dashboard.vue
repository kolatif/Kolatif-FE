<template>
  <v-app>
    <DashboardNav />
    <v-main>
      <nuxt />
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
