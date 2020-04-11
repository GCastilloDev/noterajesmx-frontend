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
    <!-- COMPONENTE DE PATROCINADORES -->
    <v-row class="grey lighten-4" align="center">
            <v-col cols="12">
                <h3 class="text-center texto-secundario">Patrocinadores</h3>
            </v-col>
            <v-col  cols="4" sm="2" justify="center" align="center" align-content="center">
                <img class="sponsor" src="@/assets/logo-no-te-rajes-mx.png" width="75%" />
            </v-col>
            <v-col cols="4" sm="2" justify="center" align="center" align-content="center">
                <img class="sponsor" src="@/assets/img/sponsor/logo-yso.png" width="75%"/>
            </v-col>
            <v-col cols="4" sm="2" justify="center" align="center" align-content="center">
                <img class="sponsor" src="@/assets/img/sponsor/coacheduonline-logo.png" width="72%" />
            </v-col>
            <v-col cols="4" sm="2" justify="center" align="center" align-content="center">
                <img class="sponsor" src="@/assets/img/sponsor/beekha-logo.png" width="90%" />
            </v-col>
            <v-col cols="4" sm="2" justify="center" align="center" align-content="center">
                <img class="sponsor" src="@/assets/img/sponsor/logoreg10.png" width="90%" />
            </v-col>
            <v-col cols="4" sm="2" justify="center" align="center" align-content="center">
                <img class="sponsor" src="@/assets/img/sponsor/logo-abril-a-color.png" width="75%" />
            </v-col>
    </v-row>
  </div>
</template>

<script>
import CardCategoria from "../components/CardCategoria";
import Banner from "../components/Banner"

export default {
  name: "Inicio",
  components: {
    CardCategoria,
    Banner
  },
  data: () => ({
    categorieNumber: 16
  })
};
</script>

<style lang="css" scoped>



.texto-primario,
.texto-secundario {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
}

.texto-primario {
    color: #ffff;
}

.sponsor{
    filter: grayscale(100%);
    transition: all .7s;
}

.sponsor:hover {
    filter: grayscale(0%);
    width: 70%;
    cursor: pointer;
}

.margen {
  margin-top: 1.5rem;
}



</style>