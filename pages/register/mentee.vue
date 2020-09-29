<template>
  <v-row align="center" justify="center" class="grey lighten-4">
    <v-col cols="12" sm="8" md="4">
      <v-container class="pa-12 logo">
        <nuxt-link to="/">
          <v-img
            :src="require('~/assets/images/logo.png')"
            alt="atourin"
            contain
          />
        </nuxt-link>
      </v-container>
      <v-card class="pl-8 pb-8 pr-8 pt-6">
        <div style="text-align: center" class="pb-2">
          <h2>Hello Future Mentee!</h2>
          <p class="mt-2">
            Want to sign up as a
            <nuxt-link to="/register/mentor">mentor?</nuxt-link>
          </p>
        </div>
        <v-form v-model="valid">
          <v-text-field
            v-model="registerInfo.name"
            prepend-inner-icon="mdi-account-outline"
            label="Name"
            :rules="[required('nama')]"
            outlined
            dense
          />
          <v-text-field
            v-model="registerInfo.email"
            prepend-inner-icon="mdi-email-outline"
            label="Email"
            :rules="[required('email'), emailFormat()]"
            outlined
            dense
          />
          <v-text-field
            v-model="registerInfo.password"
            prepend-inner-icon="mdi-lock-outline"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            counter="true"
            :rules="[required('password'), minLength('password', 8)]"
            outlined
            dense
          />
          <v-text-field
            v-model="rePassword"
            prepend-inner-icon="mdi-lock-outline"
            label="Confirm Password"
            :type="showPassword ? 'text' : 'password'"
            counter="true"
            :rules="[
              required('confirm password'),
              confirmPassword(registerInfo.password),
            ]"
            outlined
            dense
          />
          <v-text-field
            v-model="registerInfo.campus"
            prepend-inner-icon="mdi-account-outline"
            label="Campus Name"
            :rules="[required('campus')]"
            outlined
            dense
          />

          <v-btn
            block
            :disabled="!valid"
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
      rePassword: '',
      registerInfo: {
        name: '',
        email: '',
        password: '',
        campus: '',
      },
      showPassword: false,
      ...validation,
      valid: false,
    }
  },
  methods: {
    loginUser() {
      // TODO LOGIN FUNCTION
    },
  },
}
</script>
