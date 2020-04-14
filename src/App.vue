<template>
  <v-app>
    <Menu :dense="scroll" :classComponent="classComponent"></Menu>
    <v-content class="margen">
      <OverlayCiudades />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";
import OverlayCiudades from "./components/OverlayCiudades";

import { mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    scroll: false,
    classComponent: "inactive"
  }),
  components: {
    Menu,
    OverlayCiudades
  },
  methods: {
    ...mapMutations(["setCiudad", "setOverlay"]),
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

.margen {
  margin-top: -65px;
}
</style>
