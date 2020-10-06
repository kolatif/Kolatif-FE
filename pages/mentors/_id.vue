<template>
  <nuxt-child :mentor="mentor"></nuxt-child>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'dashboard',
  computed: {
    ...mapGetters({
      allMentors: 'mentors/allMentors',
    }),
    mentor() {
      // eslint-disable-next-line eqeqeq
      return this.allMentors.find((v) => v.id == this.$route.params.id)
    },
  },
}
</script>

<style></style>
