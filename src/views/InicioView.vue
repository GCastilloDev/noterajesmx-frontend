<template>
  <div>
    <!-- COMPONENTE DE BANNER -->
    <Banner />
    <!-- CARDS MIENTRAS CARGA -->
    
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

export default {
  name: "Inicio",
  components: {
    CardCategoria,
    Banner,
    Sponsor
  },
  data: () => ({
    categorieNumber: 16
  })
};
</script>

<style lang="css" scoped>

.margen {
  margin-top: 1.5rem;
}



</style>