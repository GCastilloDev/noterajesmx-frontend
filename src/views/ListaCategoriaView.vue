<template>
  <div>
    <BannerCategoria :imagen="imagen" v-show="imagen != ''"/>
    <CardNegocio :data="negocios"/>
  </div>
</template>

<script>
import BannerCategoria from "../components/BannerCategoria";
import CardNegocio from "../components/CardNegocio"

import { mapMutations } from "vuex";

import axios from "axios";

export default {
  name: "ListaCategoriaView",
  data: () => ({
    negocios: [],
    imagen: ""
  }),
  components: {
    BannerCategoria,
    CardNegocio
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
        this.negocios = await response.data.negocios;
        this.imagen =  await {
          src: require("@/assets/img/categories/" + response.data.avatar)
        };
        console.log(this.negocios);
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