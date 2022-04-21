import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import './styles/index.scss'

import { EventBus } from './utils/event-bus'

Vue.config.productionTip = false

// mount function to Vue prototype, so you can use this.$message component
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
