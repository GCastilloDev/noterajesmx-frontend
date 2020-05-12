import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from '../router/index'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    sesion: false,
    rol: null,
    token : null,
    usuario: {nombre: "", fotoPerfil: ""},
    ciudad: "",
    ciudades: null,
    overlay: false,
    ruta: null,
    categoria: null,
    categorias: ""
  },
  mutations: {
    registrarToken(state, token) {
      state.token = token;
    },
    cambiarFotoPerfil(state, fotoPerfil) {
      state.usuario.fotoPerfil = fotoPerfil;
    },
    cambiarNombre(state, nombre){
      state.usuario.nombre = nombre;
    },
    setCiudades(state, ciudades) {
      state.ciudades = ciudades;
    },
    setCiudad(state, ciudad) {
      state.ciudad = ciudad;
    },
    setOverlay(state, overlay) {
      state.overlay = overlay;
    },
    setRuta(state, ruta) {
      state.ruta = ruta;
    },
    setCategoria(state, categoria) {
      state.categoria = categoria;
    },
    setSessionStart(state, sesion) {
      state.sesion = sesion.sesion;
      state.token = sesion.token;
      state.rol = sesion.rol;
      state.usuario.nombre = sesion.usuario.nombreUsuario;
      state.usuario.fotoPerfil = sesion.usuario.fotoPerfil;

      if(state.sesion) sessionStorage.setItem("login", JSON.stringify(sesion))
      else sessionStorage.removeItem("login")
     },
    setCategorias(state, categorias) {
      state.categorias = categorias;
    }
  },
  actions: {
    sessionStart({commit}, payload) {
      const sesion = {
        sesion: true,
        token: payload.token,
        rol: payload.rol,
        usuario: {
          nombreUsuario: payload.nombre,
          fotoPerfil: payload.fotoPerfil
        }
      }
      commit("setSessionStart", sesion);
      route.push({name: 'vendedor'})
    },
    sessionDestroy({commit}, payload) {
      const sesion = {
        sesion: false,
        token: null,
        rol: null,
        usuario: {}
      }
      
      commit("setSessionStart", sesion);
      if(payload !== 'inicio') route.push({name: 'inicio'})
    },
    async getCiudades({commit}) {
      let response = await axios.get("https://lucy-coatza.herokuapp.com/cities");
      commit("setCiudades", response.data);
    },
    async getCategorias({commit}) {
      try {
        let response = await axios.get(
          "https://lucy-coatza.herokuapp.com/categories/"
        );
        commit("setCategorias",response.data)
      } catch (error) {
        console.warn(error);
      }
    },
    detectarUsuario({commit}, payload) {+
      commit("setSessionStart", payload);
    }
  },
  modules: {
    
  }
})

export default store;
