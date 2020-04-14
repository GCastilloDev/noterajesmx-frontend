<template>
  <div>
    <BannerCategoria :imagen="imagen" v-show="imagen != ''" />
    <BannerNoEncontrado v-show="mostrarBannerNoEncontrado" />
    <CardNegocio :data="negocios" v-show="mostrarCardNegocio" />
  </div>
</template>

<script>
import BannerNoEncontrado from "../components/BannerNoEncontrado";
import BannerCategoria from "../components/BannerCategoria";
import CardNegocio from "../components/CardNegocio";

import { mapMutations } from "vuex";

import axios from "axios";

export default {
  name: "ListaCategoriaView",
  data: () => ({
    negocios: [],
    imagen: "",
    mostrarBannerNoEncontrado: false,
    mostrarCardNegocio: false
  }),
  components: {
    BannerCategoria,
    CardNegocio,
    BannerNoEncontrado
  },
  methods: {
    ...mapMutations(["setRuta"]),
    async getNegocios() {
      console.warn(this.mostrarBannerNoEncontrado);
      this.mostrarBannerNoEncontrado = false;
      this.mostrarCardNegocio = false;
      try {
        const categoria = await this.$route.params.categoria;
        const idCiudad = await this.$route.params.idCiudad;
        const response = await axios.get(
          `http://lucy-coatza.herokuapp.com/category/${categoria}/city/${idCiudad}`
        );
        this.negocios = await response.data.negocios;
        this.imagen = await {
          src: require("@/assets/img/categories/" + response.data.avatar)
        };
        // Comprobar si existen elementos en el arreglo
        this.comprobarCantidadNegocios();
      } catch (error) {
        console.log(error);
      }
    },
    comprobarCantidadNegocios() {
      if (this.negocios.length == 0) {
        this.mostrarBannerNoEncontrado = true;
      } else {
        this.mostrarCardNegocio = true;
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