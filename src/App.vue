<template>
  <v-app>
    <top-bar/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <v-snackbar
        right
        top
        :color="level"
        v-model="snackbar"
    >
      {{ msg }}
      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import TopBar from '@/components/layout/top-bar'
import { EventBus } from '@/utils/event-bus'

export default {
  components: { TopBar },
  data: () => ({
    snackbar: false,
    msg: '',
    level: ''
  }),
  mounted() {
    EventBus.$on('app.message', this.handleMessage)
  },
  methods: {
    handleMessage(msg, level) {
      this.snackbar = true
      this.msg = msg
      this.level = level
    }
  }
}
</script>
