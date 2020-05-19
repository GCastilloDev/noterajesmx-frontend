<template>
  <v-app>
    <Menu :dense="scroll" :classComponent="classComponent"></Menu>
    <v-content class="margen">
      <OverlayCiudades />
      <router-view></router-view>
    </v-content>
    <Footer />
    <h1>Esto es una prueba {{prueba}}</h1>
  </v-app>
</template>

<script>
import /* webpackPrefetch: true */ Menu from "./components/Menu";
import /* webpackPrefetch: true */ OverlayCiudades from "./components/OverlayCiudades";
import /* webpackPrefetch: true */ Footer from "./components/Footer"

import { mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    prueba: process.env.PRUEBA,
    scroll: false,
    classComponent: "inactive"
  }),
  components: {
    Menu,
    OverlayCiudades,
    Footer
  },
  methods: {
    ...mapMutations(["setCiudad", "setOverlay","setSessionStart"]),
    handleScroll() {
      let alto = window.scrollY;
      this.scroll = alto > 89 ? true : false;
      this.classComponent = alto > 50 ? "active" : "inactive";
    },

    getCityLocalStorage() {
      if (localStorage.city) {
        const ciudad = JSON.parse(localStorage.getItem("city"));
        this.setCiudad(ciudad);
      } else {
        this.setOverlay(true);
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getCityLocalStorage();
  }
};
</script>

<style lang="css">
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

.margen {
  margin-top: -65px;
}
</style>
