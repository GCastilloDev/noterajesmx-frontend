<template>
  <v-app>    
    <Menu :dense="scroll" :classComponent="classComponent"></Menu>    
    <v-content class="margen">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Menu from "./components/Menu"

export default {
  name: 'App',
  data: () => ({
    color: "pink",
    scroll: false,
    classComponent: "inactive"
  }),
  components: {
    Menu
  },
  methods: {
    handleScroll() {
      const alto = window.scrollY;
      this.scroll  = alto > 89 ? true : false;
      this.classComponent = alto > 89 ? "active" : "inactive";
      //return this.color = window.scrollY>10 ? "red" : "pink"
    }
  },
  created () {
  window.addEventListener('scroll', this.handleScroll);
}
};
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap');

.margen {
  margin-top: -65px;
}
</style>
