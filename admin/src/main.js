import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from './http'
Vue.prototype.$http = http // any page can request this http api by using 'this.$http'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
