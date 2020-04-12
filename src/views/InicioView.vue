<template>
  <div>
    <!-- COMPONENTE DE BANNER -->
    <Banner />
    <!-- CARDS MIENTRAS CARGA -->
    <CardLoad :numberCards="numberCards" v-show="!showCards" />
    <!-- CARDS -->
    <!-- <v-row class="blue-grey">
      <v-container>
        <h3 class="text-center texto-primario">Categorías</h3>
        <CardCategoria class="margen" />
      </v-container>
    </v-row> -->
    <!-- SPONSOR -->
    <Sponsor />
  </div>
</template>

<script>
import CardCategoria from "../components/CardCategoria";
import Banner from "../components/Banner"
import Sponsor from "../components/Sponsor"
import CardLoad from "../components/CardLoad"

export default {
  name: "Inicio",
  components: {
    CardCategoria,
    Banner,
    Sponsor,
    CardLoad
  },
  data: () => ({
    numberCards: 16,
    showCards: false
  }),
  methods: {
    
  }
};
</script>

<style lang="css" scoped>

.margen {
  margin-top: 1.5rem;
}



</style>