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
