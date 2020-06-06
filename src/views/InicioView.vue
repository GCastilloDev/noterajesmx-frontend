<template>
  <div>
    <!-- COMPONENTE DE BANNER -->
    <Banner />
    <!-- CARDS MIENTRAS CARGA -->
    <CardLoad :numberCards="numberCards" v-show="!showCards" />
    <!-- CARDS -->
    <CardCategory :data="apiRequest" :ciudad="ciudad.id" />
    <!-- SPONSOR -->
    <Sponsor />
    <!-- PREGUNTAS FRECUENTES -->
    <PreguntasFrecuentes />
  </div>
</template>

<script>
import axios from "axios";
import CardCategory from "../components/CardCategory";
import Banner from /* webpackPrefetch: true */ "../components/Banner";
import Sponsor from "../components/Sponsor";
import CardLoad from "../components/CardLoad";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";

import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Inicio",
  components: {
    CardCategory,
    Banner,
    Sponsor,
    CardLoad,
    PreguntasFrecuentes
  },
  data: () => ({
    numberCards: 16,
    showCards: false,
    apiRequest: []
  }),
  methods: {
    ...mapMutations(["setRuta"]),
    ...mapActions(["getCategorias"]),
    /**
     * Función asincrona, para mandar a llamar las categorías que se tienen
     * desde la api.
     */
    async getDataAPI() {
      if (this.categorias === "") {
        await this.getCategorias();
        await this.llenarObjeto(this.categorias);
        this.showCards = true;
      } else {
        await this.llenarObjeto(this.categorias);
        this.showCards = true;
      }
    },
    /**
     * Función asincrona que recibe el response de la api,
     * y que genera un objeto que se manda mediante props
     * al componente de cards category para que se pueda
     * llenar.
     */
    async llenarObjeto(response) {
      let data = [];
      await response.forEach((element, index) => {
        data.push({
          id: element.id,
          name: element.name,
          src: element.svg
        });
      });
      console.log('DATA');
      console.log(data);
      this.apiRequest = data;
    }
  },
  computed: {
    ...mapState(["ciudad", "categorias"])
  },
  created() {
    // Después de crear el renderizado del DOM se manda
    // llamar a la función para llenar los datos de la api
    this.getDataAPI();
  },
  mounted() {
    this.setRuta({ name: this.$route.name, params: this.$route.params });
  }
};
</script>

<style lang="css" scoped>
.margen {
  margin-top: 1.5rem;
}
</style>