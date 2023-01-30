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
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// clip
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

// Auth and permission
import './permission'

// global css
import './styles/index.scss'

Vue.config.productionTip = false

// mount function to Vue prototype, so you can use this.$message component
import { EventBus } from './utils/event-bus'

Vue.prototype.$message = {
  success: (msg = 'Success') => EventBus.$emit('app.message', msg, 'success'),
  error: (msg = 'Error') => EventBus.$emit('app.message', msg, 'error'),
  warning: (msg = 'Warning') => EventBus.$emit('app.message', msg, 'warning')
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
