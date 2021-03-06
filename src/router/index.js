import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Nuevo from '../views/Nuevo.vue'
import masa from '../views/masa.vue'
import almacenamiento from '../views/almacenamiento.vue'
import longitud from '../views/longitud.vue'
import moneda from '../views/moneda.vue'

import tiempo from '../views/tiempo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path:'/nuevo',
    name:'Nuevo',
    component:Nuevo
  },

  {
    path:'/masa',
    name:'Masa',
    component:masa
  },

  {
    path:'/almacenamiento',
    name:'Almacenamiento',
    component:almacenamiento
  },

  {
    path:'/longitud',
    name:'Longitud',
    component:longitud
  },

  {
    path:'/moneda',
    name:'Moneda',
    component:moneda
  },

  {
    path:'/tiempo',
    name:'Tiempo',
    component:tiempo
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
