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
      this.mostrarBannerNoEncontrado = false;
      this.mostrarCardNegocio = false;
      try {
        const categoria = await this.$route.params.categoria;
        const idCiudad = await this.$route.params.idCiudad;
        const response = await axios.get(
          `http://lucy-coatza.herokuapp.com/category/${categoria}/city/${idCiudad}`
        );
        console.log(response);
        this.negocios = await response.data.negocios;
        this.imagen = await {
          src: response.data.avatar
          //src: "https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Flogo-no-te-rajes-mx.png?alt=media&token=600302f1-2411-400f-9ab5-48e9ec9eef09"
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
    console.log("MOUNTED");
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