<template>
  <div>
    <v-carousel :show-arrows="false" cycle hide-delimiters height="550">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <!-- <img
          :src="item.src"
          style="width: 100%; height: auto; background-size: cover"
        /> -->
        <v-img
          :src="item.src"
          aspect-ratio="2.6"
          gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row align="center">
        <v-col cols="7">
          <v-img :src="require('~/assets/images/banner.webp')"></v-img>
        </v-col>
        <v-col cols="5">
          <h1>What Kolatif Valley is all about</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            adipisci error odio consectetur consequuntur vel illo maxime nam ut
            porro harum accusamus, incidunt possimus voluptate facilis quibusdam
            debitis corporis minima.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div class="center">
      <v-row align="center" justify="center">
        <v-col class="white--text text-center" tag="h1">
          <span
            class="font-weight-black bigFont"
            style="line-height: 0.5"
            :class="[$vuetify.breakpoint.smAndDown ? 'small' : 'large']"
            >Connecting mentees and mentors anywhere, anytime.
          </span>
          <br class="my-0" />
          <div
            style="line-height: 1.3"
            class="font-weight-light smallFont mt-3"
            :class="[$vuetify.breakpoint.smAndDown ? 'small2' : 'large2']"
          >
            Mentors exist to help guide people in finding answers needed to
            navigate challenges and progress.
          </div>
          <div class="mt-4">
            <v-btn color="primary" to="/login">Find your mentor!</v-btn>
            <v-btn class="blue--text" to="/register">Become a Mentor!</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Featured by Kolatif</h1>
      </v-col>
    </v-row>
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
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Events & Workshop</h1>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col v-for="item in workshop" :key="item.id" cols="12" lg="3">
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
        <v-row align="center" justify="center">
          <v-col cols="5">
            <v-btn block outlined color="primary" class="text-none"
              >Lihat Semua Event dan Workshop</v-btn
            >
          </v-col>
        </v-row>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="7">
          <v-card flat outlined>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="pl-3 pt-3 pb-3">
                <v-card-title class="headline"
                  >Bergabung dengan newsletter kami</v-card-title
                >
                <v-card-subtitle
                  >Berlangganan newsletter mingguan kami untuk mendapatkan
                  informasi dan penawaran menarik kami lainnya.</v-card-subtitle
                >
                <v-text-field
                  prepend-inner-icon="mdi-email-outline"
                  label="Email"
                  outlined
                  dense
                  class="mx-4 pb-0 mb-0"
                />
                <div class="mr-7">
                  <v-btn class="ml-3 mr-6 mb-3 mt-0 pt-0" block color="primary"
                    >Subscribe</v-btn
                  >
                </div>
              </div>
              <v-avatar class="ma-3" size="200" tile>
                <v-img :src="require('~/assets/images/email.png')"></v-img>
              </v-avatar>
            </div>
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
      workshop: [
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
