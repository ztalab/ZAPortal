/*
 * Copyright 2022-present The ZTDBP Authors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import { fetchUser } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      avatar: '',
      email: ''
    }
  }, getters: {}, mutations: {
    SET_USER(state, info) {
      state.user.avatar = info.avatar_url
      state.user.email = info.email
    }
  }, actions: {
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.user.email) {
          resolve()
          return
        }

        fetchUser().then(res => {
          commit('SET_USER', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }, modules: {}
})
