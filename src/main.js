import Vue from 'vue'
import App from './App.vue'
import './styles.css'
import { store } from './store'
import DecimalFilter from './filters/decimal'

Vue.config.productionTip = false
Vue.filter('decimal', DecimalFilter)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
