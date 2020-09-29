<template>
  <div>
    <v-container>
      <h1>This is the dashboard</h1>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="4">
          <Mentors />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Mentors from '../../components/dashboard/Mentors'
export default {
  layout: 'dashboard',
  components: {
    Mentors,
  },
  data() {
    return {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    }
  },
}
</script>

<style></style>
