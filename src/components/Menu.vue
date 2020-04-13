<template>
  <div>
    <v-app-bar app :dense="dense" flat :class="classComponent">
      <div class="d-flex align-center">
        <v-img
          alt="No te reajes logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo-no-te-rajes-mx.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>      
        <v-btn
          @click="setOverlay(true)"
          text
        >
        <v-icon>mdi-map-marker-radius</v-icon>
          <span class="mr-2">{{ ciudad.name }}</span>
        <v-icon>mdi-menu-down</v-icon>  
        </v-btn>
      
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Menu",
  data: () => ({}),
  props: ["dense", "classComponent"],
  methods: {
    ...mapMutations(["setOverlay"])
  },
  computed: {
    ...mapState(["ciudad"])
  }
};
</script>

<style lang="css" scoped>
.inactive {
  background-color: transparent !important;
}

.active {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>