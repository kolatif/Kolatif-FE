<template>
  <div class="pb-12">
    <v-img
      max-height="400"
      :src="require('~/assets/images/faq.jpg')"
      gradient="to top right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)"
    >
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
          <v-col class="white--text text-center" cols="12" tag="h1">
            <span
              class="font-weight-black bigFont"
              :class="[$vuetify.breakpoint.smAndDown ? 'small' : 'large']"
              >Is there something you'd like to know?</span
            >
            <br class="my-0" />
            <span
              class="font-weight-light smallFont"
              :class="[$vuetify.breakpoint.smAndDown ? 'small2' : 'large2']"
              >Feel free to browse the FAQ section</span
            >
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container>
      <h1 style="text-align: center" class="mb-3 mt-2">
        Choose a topic of your interest
      </h1>
      <v-row>
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Topic from '../../components/faq/topic'
export default {
  components: {
    Topic,
  },
  layout: 'dashboard',
  head() {
    return {
      title: 'FAQ',
    }
  },
}
</script>
<style scoped>
.large {
  font-size: 40px;
}

.small {
  font-size: 40px;
}

.large2 {
  font-size: 25px;
}

.small2 {
  font-size: 20px;
}
</style>
