<template>
<!-- COMPONENTE BANNER CON ANIMACIÓN -->
    <v-row align="center" class="banner">
      <v-col cols="12" md="5" justify="center" align="center" align-content="center">
        <v-img :src="imagen.src" width="80%" />
      </v-col>
      <v-col cols="12" md="7" justify="center" align="center" align-content="center">
        <p class="categoria-title">{{ categoria }}</p>
      </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex"
    export default {
        name: "BannerCategoria",
        props: ["imagen"],
        computed: {
          ...mapState(["categoria"])
        }
    }
</script>

<style lang="css" scoped>

.banner {
  background-color: #F5F5F5;
  padding-top: 56px;
}

.categoria-title {
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  white-space:nowrap;
  font-size: 2.5rem;
  color:#71009F;
}
</style>