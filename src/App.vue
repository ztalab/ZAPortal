<template>
  <v-app>
    <top-bar/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from '@/components/layout/top-bar'

export default {
  components: { TopBar },
  data: () => ({
    //
  })
}
</script>
