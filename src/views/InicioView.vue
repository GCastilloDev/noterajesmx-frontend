<template>
  <div>
    <!-- COMPONENTE DE BANNER -->
    <Banner />
    <!-- CARDS MIENTRAS CARGA -->
    {{ $route.name }}
    <CardLoad :numberCards="numberCards" v-show="!showCards" />
    <!-- CARDS -->
    <CardCategory :data="apiRequest" :ciudad="ciudad.id" />
    <!-- SPONSOR -->
    <Sponsor />
  </div>
</template>

<script>
import axios from "axios";
import CardCategory from "../components/CardCategory";
import Banner from "../components/Banner";
import Sponsor from "../components/Sponsor";
import CardLoad from "../components/CardLoad";

import { mapMutations, mapState } from "vuex"

export default {
  name: "Inicio",
  components: {
    CardCategory,
    Banner,
    Sponsor,
    CardLoad
  },
  data: () => ({
    numberCards: 16,
    showCards: false,
    apiRequest: []
  }),
  methods: {
     ...mapMutations(["setRuta"]),
    /**
     * Función asincrona, para mandar a llamar las categorías que se tienen
     * desde la api.
     */
    async getDataAPI() {
      try {
        let response = await axios.get(
          "https://lucy-coatza.herokuapp.com/categories/"
        );
        console.log(response.data);
        await this.llenarObjeto(response);
        // Se cambia la variable para mostrar el componente de cards
        // lleno y quitar el de cards load
        this.showCards = true;
      } catch (error) {
        console.log(error);
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
      await response.data.forEach((element, index) => {
        data.push({
          id: element.id,
          name: element.name,
          src: require("@/assets/img/categories/" + element.svg)
        });
      });
      this.apiRequest = data;
    },
  },
  computed: {
    ...mapState(["ciudad"])
  },
  created() {
    // Después de crear el renderizado del DOM se manda
    // llamar a la función para llenar los datos de la api
    this.getDataAPI();
    console.log(this.ciudad);
  },
  mounted() {
    this.setRuta({name: this.$route.name, params: this.$route.params});
  }
};
</script>

<style lang="css" scoped>
.margen {
  margin-top: 1.5rem;
}
</style>