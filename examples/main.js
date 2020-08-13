import Vue from 'vue'
import App from './App.vue'
import HuUI from '../packages'

Vue.config.productionTip = false
Vue.use(HuUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
