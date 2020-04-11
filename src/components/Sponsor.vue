<template>
  <v-row class="blue-grey darken-1" align="center">
    <v-col cols="12">
      <h3 class="text-center sponsor-title">Patrocinadores</h3>
    </v-col>
    <v-col
      cols="4"
      sm="2"
      justify="center"
      align="center"
      align-content="center"
      v-for="(imagen, item) in imagenes"
      :key="item"
    >
      <img class="sponsor" :src="imagen.src" :width="imagen.width" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Sponsor",
  data: () => ({
    imagenes: [
      {
        src: require("@/assets/logo-no-te-rajes-mx.png"),
        width: "75%"
      },
      {
        src: require("@/assets/img/sponsor/logo-yso.png"),
        width: "75%"
      },
      {
        src: require("@/assets/img/sponsor/coacheduonline-logo.png"),
        width: "73%"
      },
      {
        src: require("@/assets/img/sponsor/beekha-logo.png"),
        width: "75%"
      },
      {
        src: require("@/assets/img/sponsor/logoreg10.png"),
        width: "75%"
      },
      {
        src: require("@/assets/img/sponsor/logo-abril-a-color.png"),
        width: "75%"
      }
    ]
  })
};
</script>


<style lang="css" scoped>
.sponsor-title {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: white;
}
.sponsor {
  filter: grayscale(100%);
  transition: all 0.7s;
}

.sponsor:hover {
  filter: grayscale(0%);
  width: 72%;
  cursor: pointer;
}
</style>