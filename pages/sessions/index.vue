<template>
  <div>
    <v-container>
      <div v-for="(session, index) in sessions" :key="index">
        <SingleSession
          :session="session"
          :mentordata="filterMentor(session.mentorId)"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import _ from 'lodash'
import SingleSession from '../sessions/singleSession'

export default {
  layout: 'dashboard',
  components: {
    SingleSession,
  },
  // // TODO: Get Session data and data to state
  // created() {
  //   this.$store.dispatch('sessions/getSessionData')
  // },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapState('sessions', {
      sessions: (state) => state.sessions,
      myMentors: (state) => state.myMentors,
    }),
  },
  methods: {
    filterMentor(id) {
      // eslint-disable-next-line no-console
      console.log(`my Sessions: ${this.sessions}`)
      // eslint-disable-next-line no-console
      console.log(`my Mentors: ${this.myMentors}`)
      const targetMentor = this.myMentors.find((mentor) => {
        return mentor.id === id
      })
      // eslint-disable-next-line no-console
      console.log(`target mentor: ${targetMentor}`)
      return targetMentor
    },
  },
  // methods: {
  //   getSessions() {},
  //   getMentors() {},
  // },
}
</script>

<style></style>
