<template>
  <div>
    <!-- COMPONENTE DE BANNER -->
    <Banner />
    <!-- CARDS MIENTRAS CARGA -->
    <CardLoad :numberCards="numberCards" v-show="!showCards" />
    <!-- CARDS -->
    <h2>PRUEBA</h2>
    <CardCategory :data="apiRequest"/>
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
    async getDataAPI() {
      try {
        let response = await axios.get(
          "https://lucy-coatza.herokuapp.com/categories/"
        );
        console.log(response);
        await this.llenarObjeto(response);
        this.showCards = true;
      } catch (error) {
        console.log(error);
      }
    },
    async llenarObjeto(response) {
      let data = [];
      await response.data.forEach((element, index) => {
        data.push({
          name: element.name,
          src: require("@/assets/img/categories/" + element.svg),
          color: (index + 1) % 2 == 0 ? "deep-purple " : "deep-orange darken-1"
        });
      });
      this.apiRequest = data;
      //console.log(data);
    }
  },
  created() {
    this.getDataAPI();
  }
};
</script>

<style lang="css" scoped>
.margen {
  margin-top: 1.5rem;
}
</style>