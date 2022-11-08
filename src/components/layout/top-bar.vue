<!--
  ~ Copyright 2022-present The ZTDBP Authors.
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
-->

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
        <v-btn href="https://github.com/ZTDBP/ZASentinel" target="_blank" text>
          <span class="font-weight-regular text-capitalize text-caption">Download</span>
        </v-btn>
        <v-btn href="https://www.ZTDBP.xyz" target="_blank" text>
          <span class="font-weight-regular text-capitalize text-caption">Setup Guide</span>
        </v-btn>
        <v-btn :to="{name: 'login'}" text v-if="!isLogin">
          <span class="font-weight-regular text-capitalize text-caption">Sign in</span>
        </v-btn>
        <v-btn icon
               href="https://github.com/ZTDBP"
               target="_blank"
               :color="$vuetify.theme.dark ? 'white' : 'black'">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon
               :color="$vuetify.theme.dark ? 'white' : 'black'"
               @click="handleToggleTheme">
          <v-icon v-if="$vuetify.theme.dark">mdi-weather-sunny</v-icon>
          <v-icon v-else>mdi-weather-night</v-icon>
        </v-btn>
        <template v-if="isLogin">
          <v-divider vertical inset class="ml-5 mr-5"/>
          <v-menu offset-y rounded>
            <template v-slot:activator="{ on, attrs }">
              <v-avatar
                  color="primary"
                  size="48"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-img v-if="avatar" :src="avatar" width="48">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular
                          indeterminate
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <span v-else>{{ shortEmail }}</span>
              </v-avatar>
            </template>
            <v-list dense>
              <v-list-item link>
                <v-list-item-content @click="handleLogout">Logout</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
import cookie from 'js-cookie'
import { getCache, setCache } from '@/utils/cache'

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
  },
  created() {
    this.$vuetify.theme.dark = getCache('theme_dark', true)
  },
  methods: {
    handleLogout() {
      cookie.remove('zta')
      window.location.href = '/'
    },
    handleToggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      setCache('theme_dark', this.$vuetify.theme.dark)
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
