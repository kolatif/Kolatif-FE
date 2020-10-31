<template>
  <div class="pb-12">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="2">
          <v-img
            :src="require('~/assets/images/joseph.jpeg')"
            aspect-ratio="1"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="10" md="10" class="pl-12">
          <h2>
            {{ mentor.name }}
          </h2>
          <div v-for="(work, index) in mentor.workExperience" :key="index">
            <div v-if="index == 0">
              <p class="my-0">{{ work.jobTitle }}</p>
              <p class="py-0 my-0">{{ work.company }}</p>
            </div>
          </div>
          <v-row class="ml-0">
            <v-rating
              :value="mentor.rating"
              color="primary"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <span> &nbsp; {{ mentor.rating }} </span>
            <span> &nbsp;({{ mentor.reviews }}) </span>
          </v-row>
          <p></p>

          <BookDialog :mentor="mentor" />
        </v-col>
      </v-row>
      <h2 class="mt-3">Expertise</h2>
      <v-chip-group>
        <div v-for="(expertise, index) in mentor.expertise" :key="index">
          <v-chip class="mr-2">{{ expertise }}</v-chip>
        </div>
      </v-chip-group>
      <h2 class="mt-3">My Working Experience</h2>
      <div
        v-for="experience in mentor.workExperience"
        :key="experience.id"
        class="mt-3"
      >
        <v-row>
          <v-col cols="12" lg="1" md="1">
            <v-img
              :src="require('~/assets/images/img-placeholder.jpg')"
              max-width="100"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="10" md="10">
            <p class="my-0">
              <b>{{ experience.jobTitle }}</b>
            </p>
            <p class="my-0">{{ experience.company }}</p>
            <p class="my-0">
              {{ experience.startDate }} - {{ experience.endDate }}
            </p>
          </v-col>
        </v-row>
      </div>
      <h2 class="mt-3">My Education</h2>
      <div
        v-for="(education, index) in mentor.education"
        :key="index"
        class="mt-3"
      >
        <v-row>
          <v-col cols="12" lg="1" md="1">
            <v-img
              :src="require('~/assets/images/img-placeholder.jpg')"
              max-width="100"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="10" md="10">
            <p class="my-0">
              <b>{{ education.campus }}</b>
            </p>
            <p class="my-0">{{ education.major }}</p>
            <p class="my-0">
              {{ education.startDate }} - {{ education.endDate }}
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
// import validation from '~/utils/validation'
import BookDialog from '../../../components/mentors/BookDialog'
export default {
  components: {
    BookDialog,
  },
  props: {
    mentor: {
      type: Object,
      required: true,
    },
  },
  scrollToTop: true,
  head() {
    return {
      title: this.mentor.name,
    }
  },
}
</script>

<style></style>
