<template>
  <div>
    <!-- COMPONENTE DE BANNER -->
    <v-row align="center" class="banner">
      <v-col cols="12" md="5" justify="center" align="center" align-content="center">
        <img src="@/assets/team.svg" width="80%" />
      </v-col>
      <v-col cols="12" md="7" justify="center" align="center" align-content="center">
        <div class="animacion" style="color:#24CC89">No te rajes</div>
        <div class="animacion" style="color:#71009F">
          <span>¡Jalamos juntos!</span>
        </div>
      </v-col>
    </v-row>
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
import hands from "../components/Hands";

export default {
  name: "Inicio",
  components: {
    CardCategoria,
    hands
  },
  data: () => ({
    categorieNumber: 16
  })
};
</script>

<style lang="css" scoped>

.banner {
  background-color: #F5F5F5;
}

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

@keyframes sponsorAnimate {
    0% {filter: grayscale(100%);}
    20% {filter: grayscale(75%);}
    80% {filter: grayscale(50%);}
    100% {filter: grayscale(0%);}
}

.margen {
  margin-top: 1.5rem;
}

.animacion {
  font-family: 'Raleway', sans-serif;
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
  font-size: 2.5rem;
}

.animacion:first-of-type {    /* For increasing performance 
                       ID/Class should've been used. 
                       For a small demo 
                       it's okaish for now */
  animation: showup 7s infinite;
}

.animacion:last-of-type {
  width:0px;
  animation: reveal 7s infinite;
}


.animacion:last-of-type span {
  margin-left:-350;
  animation: slidein 7s infinite;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:1;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:350px;}
    20% {opacity:1;width:350px;}
    30% {width:350px;}
    80% {opacity:1;}
    100% {opacity:1;width:350px;}
}

</style>