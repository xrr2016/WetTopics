import Vue from 'vue'
import VueRouter from 'vue-router'
import components from './components/index'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:components.header
  }
]

const router = new VueRouter({
  routes
})

export default router
