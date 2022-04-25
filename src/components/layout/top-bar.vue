<template>
  <v-app-bar app flat class="transparent app-bar" :class="$vuetify.theme.dark ? 'dark-line':'light-line'">
    <v-container class="d-flex justify-space-between">
      <div class="d-flex align-center">
        <img src="~@/assets/logo.png"
             alt="logo"
             height="50px"
             class="mr-10 cur-p"
             @click="$router.push('/')"
        />
        <v-btn
            rounded
            v-for="(v,k) in ['clients', 'servers', 'resources', 'relay']"
            :key="k"
            class="font-weight-regular text-subtitle-1 text-capitalize mr-5"
            :to="{name: v}"
            text
        >{{ v }}
        </v-btn>
      </div>
      <div class="d-flex align-center">
        <v-btn href="https://github.com/ztalab/ZASentinel" target="_blank" text>
          <span class="font-weight-regular text-capitalize text-caption">Download</span>
        </v-btn>
        <v-btn href="https://www.ztalab.xyz" target="_blank" text>
          <span class="font-weight-regular text-capitalize text-caption">Setup Guide</span>
        </v-btn>
        <v-btn :to="{name: 'login'}" text v-if="!isLogin">
          <span class="font-weight-regular text-capitalize text-caption">Sign in</span>
        </v-btn>
        <v-btn icon
               href="https://github.com/ztalab"
               target="_blank"
               :color="$vuetify.theme.dark ? 'white' : 'black'">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon
               :color="$vuetify.theme.dark ? 'white' : 'black'"
               @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-icon v-if="$vuetify.theme.dark">mdi-weather-sunny</v-icon>
          <v-icon v-else>mdi-weather-night</v-icon>
        </v-btn>
        <template v-if="isLogin">
          <v-divider vertical inset class="ml-5 mr-5"/>
          <v-avatar
              color="primary"
              size="48"
          >
            <v-img v-if="avatar" :src="avatar" width="48">
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <span v-else>{{ shortEmail }}</span>
          </v-avatar>
        </template>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    avatar() {
      return this.$store.state.user.avatar
    },
    shortEmail() {
      return this.$store.state.user.email.substring(0, 2)
    },
    isLogin() {
      return !!this.shortEmail
    }
  }
}
</script>
<style lang="scss" scoped>
.app-bar {
  backdrop-filter: blur(15px);

  &.dark-line {
    border-bottom: 1px solid #333 !important;
  }

  &.light-line {
    border-bottom: 1px solid #e8e8e8 !important;
  }
}
</style>
