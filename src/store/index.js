import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ciudad: "",
    ciudades: null,
    overlay: false
  },
  mutations: {
    setCiudades(state, ciudades) {
      state.ciudades = ciudades;
    },
    setCiudad(state, ciudad) {
      state.ciudad = ciudad;
    },
    setOverlay(state, overlay) {
      state.overlay = overlay;
    }
  },
  actions: {
    async getCiudades({commit}) {
      let response = await axios.get("https://lucy-coatza.herokuapp.com/cities");
      commit("setCiudades", response.data);
    }
  },
  modules: {
  }
})
