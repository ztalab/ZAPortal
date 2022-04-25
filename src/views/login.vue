<template>
  <div class="d-flex justify-center align-center" style="min-height: 300px">
    <v-btn x-large :href="github" rounded>
      <v-icon class="mr-5">mdi-github</v-icon>
      Sign in with Github
    </v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    github: process.env.VUE_APP_BASE_URL + '/user/login/github'
  })
}
</script>
