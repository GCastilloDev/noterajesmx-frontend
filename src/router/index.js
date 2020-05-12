import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index"

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "inicio" */ '../views/InicioView.vue')
    },
    {
      path: '/categoria/:categoria/ciudad/:idCiudad',
      name: 'categoria',
      component: () => import(/* webpackChunkName: "categoria" */ '../views/ListaCategoriaView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    },
    {
      path: '/acceso-denegado',
      name: 'acceso-denegado',
      component: () => import(/* webpackChunkName: "acceso-denegado" */ '../views/AccesoRestringido.vue')
    },
    {
      path: '/1/dash',
      name: 'vendedor',
      component: () => import(/* webpackChunkName: "vendedor" */ '../views/Vendedor.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/1/crear-cuenta',
      name: 'vendedor-crear-cuenta',
      component: () => import(/* webpackChunkName: "vendedor-crear-cuenta" */ '../views/vendedor/CrearCuenta.vue'),
      meta: { evitarAccesoLogeado: true}
    },
    {
      path: '/1/activar',
      name: 'vendedor-desactivado',
      component: () => import(/* webpackChunkName: "vendedor-desactivado" */ '../views/vendedor/FormularioVendedorDesactivado.vue'),
      /* meta: { requiresAuth: true } */
    },
    {
      path: '/2/dash',
      name: 'comprador',
      component: () => import(/* webpackChunkName: "comprador" */ '../views/Comprador.vue'),
      meta: { requiresAuth: true }
    },
    {
      // Ruta para página no encontrada
      path: '*',
      name: 'error404',
      component: () => import(/* webpackChunkName: "error404" */ '../components/Error404.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
  const evitarAccesoLogeado = to.matched.some(record => record.meta.evitarAccesoLogeado);
  const sesion = store.state.sesion;
  const rol = store.state.rol;
  const continuar = to.name.includes(rol);

  if(evitarAccesoLogeado && sesion){
    next({name: 'acceso-denegado'})
  }

  if (rutaProtegida) {
    if(!sesion && !continuar) {
      next({name: 'login'})  
    } else {
      if(!continuar) {
        next({name: 'acceso-denegado'}) 
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
