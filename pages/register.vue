<template>
  <v-row align="center" justify="center" class="grey lighten-4">
    <v-col cols="12" sm="8" md="4">
      <v-container class="pa-12 logo">
        <v-img
          :src="require('~/assets/images/logo.png')"
          alt="atourin"
          contain
        />
      </v-container>
      <v-card class="pa-8">
        <div>
          <strong>Create a new account</strong>
        </div>
        <br />
        <v-form>
          <v-text-field
            v-model="loginInfo.name"
            prepend-inner-icon="mdi-account-outline"
            label="Name"
            :rules="[required('nama')]"
            outlined
            dense
            class="mb-2"
          />
          <v-text-field
            v-model="loginInfo.email"
            prepend-inner-icon="mdi-email-outline"
            label="Email"
            :rules="[required('email'), emailFormat()]"
            outlined
            dense
            class="mb-2"
          />
          <v-text-field
            v-model="loginInfo.password"
            prepend-inner-icon="mdi-lock-outline"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            counter="true"
            :rules="[required('password'), minLength('password', 8)]"
            outlined
            dense
            @click:append="showPassword = !showPassword"
          />
          <v-row class="margin">
            <v-checkbox v-model="rememberMe" class="TnC"></v-checkbox>I agree
            with the &nbsp;
            <nuxt-link to="#">Terms and Conditions</nuxt-link>
          </v-row>

          <v-btn
            block
            class="text-none primmary"
            color="primary"
            @click="loginUser"
            >Create a new Account</v-btn
          >
        </v-form>
      </v-card>
      <p class="mt-6 text-center">
        Already have account?
        <nuxt-link to="/login">Sign In</nuxt-link>
      </p>
    </v-col>
    <div></div>
  </v-row>
</template>

<script>
import validation from '~/utils/validation'
export default {
  layout: 'normal',
  data() {
    return {
      loginInfo: {
        name: '',
        email: '',
        password: '',
      },
      showPassword: false,
      ...validation,
      valid: false,
      rememberMe: false,
    }
  },
  methods: {
    loginUser() {
      // TODO LOGIN FUNCTION
    },
  },
}
</script>

<style scoped>
/* .title {
  margin-bottom: 20px;
} */
.TnC {
  margin-top: -4px;
}
.logo {
  margin-bottom: -20px;
}
.margin {
  margin-left: 0px;
}
</style>
