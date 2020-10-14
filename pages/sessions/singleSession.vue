<template>
  <v-card class="mx-5 mt-5 pa-3">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline pb-0">{{ mentordata.name }}</v-card-title>

        <v-card-text class="pb-0 pt-0">
          <div v-for="(work, index) in mentordata.workExperience" :key="index">
            <div v-if="index == 0" class="mt-2">
              {{ work.jobTitle }} at {{ work.company }}
            </div>
          </div>
          <div class="mt-1">Status: {{ session.status }}</div>
          <div class="mt-1">Date: {{ session.date }} at {{ session.time }}</div>
          <div class="mt-1">Google Meet: {{ session.googleMeet }}</div>
        </v-card-text>

        <v-card-actions class="pb-0">
          <v-btn text color="primary">Details</v-btn>
          <v-btn text color="primary"> Leave a Review </v-btn>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3" size="180" tile>
        <v-img :src="require('~/assets/images/404.png')"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SingleSession',
  props: {
    session: {
      type: Object,
      required: true,
    },
    mentordata: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
