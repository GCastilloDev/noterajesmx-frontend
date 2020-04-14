<template>
  <div class="deep-purple lighten-5">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" v-for="(negocio, index) in data" :key="index">
          <v-card outlined>
            <v-card-title class="avatar deep-orange darken-1">
              <v-col cols="2" class="avatar" justify="center" align="center" align-content="center">
                <v-img
                  class="prueba"
                  src="@/assets/logo-no-te-rajes-mx.png"
                  alt="John"
                  width="70%"
                ></v-img>
              </v-col>
              <v-col cols="10" class="titulo-card">{{negocio.name}}</v-col>
            </v-card-title>
            <v-card-text class="contenido">
              <p><v-icon class="icono">mdi-map-marker-radius</v-icon>{{ ciudad.name }}</p>
              <p><v-icon class="icono">mdi-cellphone</v-icon>{{ negocio.phone }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "CardNegocio",
  computed: {
    ...mapState(["ciudad"])
  },
  props: ["data"]
};
</script>

<style lang="css" scoped>
p {
  margin: 0;
}

.icono {
  padding-bottom: .27rem;
  font-size: 0.875rem;
  margin-right: .27rem;
}

.contenido {
  margin-top: 1rem;
}

.titulo-card {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
}

.avatar {
  padding: 0.2rem;
}
</style>