<template>
  <div>
    <OverlayCiudades />
    <!-- COMPONENTE DE BANNER -->
    <Banner />
    <!-- CARDS MIENTRAS CARGA -->
    <CardLoad :numberCards="numberCards" v-show="!showCards" />
    <!-- CARDS -->
    <CardCategory :data="apiRequest" />
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
import OverlayCiudades from "../components/OverlayCiudades"

import { mapMutations } from "vuex"

export default {
  name: "Inicio",
  components: {
    CardCategory,
    Banner,
    Sponsor,
    CardLoad,
    OverlayCiudades
  },
  data: () => ({
    numberCards: 16,
    showCards: false,
    apiRequest: []
  }),
  methods: {
    ...mapMutations(["setCiudad","setOverlay"]),
    /**
     * Función asincrona, para mandar a llamar las categorías que se tienen
     * desde la api.
     */
    async getDataAPI() {
      try {
        let response = await axios.get(
          "https://lucy-coatza.herokuapp.com/categories/"
        );
        //console.log(response);
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
          name: element.name,
          src: require("@/assets/img/categories/" + element.svg)
        });
      });
      this.apiRequest = data;
    },

    getCityLocalStorage() {
      if(localStorage.city){
        const ciudad = JSON.parse(localStorage.getItem("city"));
        this.setCiudad(ciudad);
      } else {
        this.setOverlay(true);
      }
    }
  },
  created() {
    // Después de crear el renderizado del DOM se manda
    // llamar a la función para llenar los datos de la api
    this.getDataAPI();
    this.getCityLocalStorage();
  }
};
</script>

<style lang="css" scoped>
.margen {
  margin-top: 1.5rem;
}
</style>