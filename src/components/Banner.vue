<template>
  <!-- COMPONENTE BANNER CON ANIMACIÓN -->
  <v-row align="center" class="banner">
    <v-col cols="12" md="5" justify="center" align="center" align-content="center">
      <img src="https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Fassets%2Fteam.svg?alt=media&token=ddb82544-a917-4a89-98dd-df35fd50a557" width="80%" />
    </v-col>
    <v-col cols="12" md="7" justify="center" align="center" align-content="center">
      <v-col cols="12">
        <div class="animacion" style="color:#24CC89">No te rajes</div>
        <div class="animacion" style="color:#71009F">
          <span>¡Jalamos juntos!</span>
        </div>
      </v-col>
      <v-col cols="12" v-if="!sesion">
        <v-btn
          color="morado"
          dark
          depressed
          large
          x-large
          :to="{name: 'vendedor-crear-cuenta'}"
          >Da de alta tu negocio!</v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "Banner",
  computed: {
    ...mapState(["sesion"])
  }
};
</script>

<style lang="css" scoped>
.banner {
  background-color: #f5f5f5;
  padding-top: 56px;
  margin: 0;
}

.animacion {
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 2.5rem;
}

.animacion:first-of-type {
  /* For increasing performance 
    ID/Class should've been used. 
    For a small demo 
    it's okaish for now */
  animation: showup 7s infinite;
}

.animacion:last-of-type {
  width: 0px;
  animation: reveal 7s infinite;
}

.animacion:last-of-type span {
  margin-left: -350;
  animation: slidein 7s infinite;
}

@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slidein {
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 350px;
  }
  20% {
    opacity: 1;
    width: 350px;
  }
  30% {
    width: 350px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 350px;
  }
}
</style>