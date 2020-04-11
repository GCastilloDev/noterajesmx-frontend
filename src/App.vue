<template>
  <v-app>    
    <Menu></Menu>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Menu from "./components/Menu"

export default {
  name: 'App',
  data: () => ({
    color: "pink"
  }),
  components: {
    Menu
  },
  methods: {
    handleScroll() {
      return this.color = window.scrollY>10 ? "red" : "pink"
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
</style>
