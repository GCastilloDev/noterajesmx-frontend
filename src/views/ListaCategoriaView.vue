<template>
  <div>
    <BannerCategoria :imagen="imagen" v-show="imagen != ''"/>
    <h1>Lista Categoria</h1>
    <h3>{{ $route.name }}</h3>
    <ul>
      <li v-for="(negocio, index) in negocios" :key="index">{{negocio.name}}</li>
    </ul>
  </div>
</template>

<script>
import BannerCategoria from "../components/BannerCategoria";

import { mapMutations } from "vuex";

import axios from "axios";

export default {
  name: "ListaCategoriaView",
  data: () => ({
    negocios: [],
    imagen: ""
  }),
  components: {
    BannerCategoria
  },
  methods: {
    ...mapMutations(["setRuta"]),
    async getNegocios() {
      try {
        const categoria = await this.$route.params.categoria;
        const idCiudad = await this.$route.params.idCiudad;
        const response = await axios.get(
          `http://lucy-coatza.herokuapp.com/category/${categoria}/city/${idCiudad}`
        );
        this.negocios = response.data.negocios;
        this.imagen = {
          src: require("@/assets/img/categories/" + response.data.avatar)
        };
        console.warn(this.imagen);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getNegocios();
  },
  mounted() {
    this.setRuta({ name: this.$route.name, params: this.$route.params });
  },
  watch: {
    $route(to, from) {
      this.getNegocios();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>