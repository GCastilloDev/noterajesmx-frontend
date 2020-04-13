import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ciudad: null,
    ciudades: null
  },
  mutations: {
    setCiudades(state, ciudades) {
      state.ciudades = ciudades;
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
