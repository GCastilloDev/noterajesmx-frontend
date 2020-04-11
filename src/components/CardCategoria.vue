<template>
  <div>
    <v-row dense>
      <v-col
        cols="4"
        md="2"
        class="d-flex child-flex"
        v-for="(item, index) in apiRequest"
        :key="index"
        style="margin: 0rem"
      >
        <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`">
          <v-skeleton-loader elevation=1 type="article"></v-skeleton-loader>
        </v-sheet>
        <!-- <v-hover>
          <template v-slot="{ hover }">
            <v-card :elevation="hover ? 24 : 6" tile class="prueba">
              <v-img
                  :src="item.src"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(36,204,137,.3)"
                  class="white--text align-end"
                  > 
                  </v-img>
                <div class="titulo">
                    {{item.name}}
                </div>
            </v-card>
          </template>
        </v-hover>-->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import hands from "../components/Hands";
import el from "../main";

export default {
  name: "CardCategoria",
  inject: ['theme'],
  components: {
    hands
  },
  data: () => ({
    apiRequest: ""
  }),
  methods: {
    async api() {
      try {
        let response = await axios.get(
          "https://lucy-coatza.herokuapp.com/categories/"
        );
        console.log(response);
        await this.llenarObjeto(response);
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
    },
    obtenerAlto() {
      return window.innerHeight / 3;
    }
  },
  created() {
    this.api();
    console.log(this.obtenerAlto());
    console.log(this.$refs.prueba);
  },
  updated() {
    console.log("update");
  }
};
</script>

<style lang="css" scoped>
.titulo {
  padding: 0.2rem;
  text-align: center;
  font-weight: 400;
  margin: auto;
}

.prueba:hover {
  cursor: pointer;
}
</style>