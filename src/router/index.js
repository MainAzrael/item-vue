import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import filmsRouter from "./routers/filme"
import centerRouter from "./routers/center"
import conemsRouter from "./routers/cinema"
const routes = [
  filmsRouter,
  centerRouter,
  conemsRouter,
  {path:'/' , redirect:'/films'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
