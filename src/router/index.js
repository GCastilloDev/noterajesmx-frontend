import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/InicioView.vue')
    },
    {
      path: '/categoria/:categoria/ciudad/:idCiudad',
      name: 'categoria',
      component: () => import('../views/ListaCategoriaView.vue')
    },
    {
      // Ruta para página no encontrada
      path: '*',
      name: 'error404',
      component: () => import('../components/Error404.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
