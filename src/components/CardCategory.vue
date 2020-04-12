<template>
  <div class="deep-purple lighten-5">
    <v-container>
      <v-row dense>
        <v-col
          cols="4"
          md="2"
          class="d-flex child-flex"
          v-for="(item, index) in data"
          :key="index"
          style="margin: 0rem"
        >
          <v-hover>
            <template v-slot="{ hover }">
              <v-card :elevation="hover ? 24 : 6" tile class="prueba">
                <v-img
                  :src="item.src"
                  aspect-ratio="1"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(36,204,137,.3)"
                  class="white--text align-end"
                ></v-img>
                <div class="titulo">{{item.name}}</div>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CardCategory",
  props: ["data"],
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
    }
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