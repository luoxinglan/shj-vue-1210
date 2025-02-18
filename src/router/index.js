import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from "../views/page1.vue"
import Page2 from "../views/page2.vue"
import Page3 from "../views/page3.vue"
import Page4 from "../views/page4.vue"
import Page5 from "../views/page5.vue"
import Page6 from "../views/page6.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3
  },
  {
    path: '/page4',
    name: 'page4',
    component: Page4
  },
  {
    path: '/page5',
    name: 'page5',
    component: Page5
  },
  {
    path: '/page6',
    name: 'page6',
    component: Page6
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
