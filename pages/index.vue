<template>
  <div>
    <v-carousel :show-arrows="false" cycle hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <!-- <img
          :src="item.src"
          style="width: 100%; height: auto; background-size: cover"
        /> -->
        <v-img
          :src="item.src"
          aspect-ratio="3"
          gradient="to top right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Highlights</h1>
      </v-col>
    </v-row>
    <div class="center">
      <v-row align="center" justify="center">
        <v-col class="white--text text-center" cols="12" tag="h1">
          <span
            class="font-weight-black bigFont"
            :class="[$vuetify.breakpoint.smAndDown ? 'small' : 'large']"
            >Connecting mentees and mentors anywhere, anytime.
          </span>
          <br class="my-0" />
          <span
            class="font-weight-light smallFont"
            :class="[$vuetify.breakpoint.smAndDown ? 'small2' : 'large2']"
            >Kolatif Valley</span
          >
        </v-col>
      </v-row>
    </div>
    <v-container>
      <v-row>
        <v-col v-for="item in news" :key="item.id" cols="12" lg="4">
          <v-card class="mx-auto" max-width="400" flat outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('~/assets/images/header-1.jpg'),
        },
        {
          src: require('~/assets/images/header-2.jpg'),
        },
        {
          src: require('~/assets/images/header-3.jpg'),
        },
      ],
      news: [
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

<style scoped>
.center {
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
