import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'



FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
