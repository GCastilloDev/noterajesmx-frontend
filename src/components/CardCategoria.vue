<template>
  <div>
    <v-row dense>
      <v-col cols="3" class="d-flex child-flex" v-for="(item, index) in items" :key="index">
        <v-card color="#385F73" 
            dark>
                <v-img
                  :src="item"
                  aspect-ratio="1"
                  width="100%"
                  class=""
                >
                <v-card-title> Prueba </v-card-title>
                </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "CardCategoria",
  data: () => ({
      urlImg: "@/assets/img/categories/store_green.svg",
      n: "store_green.svg",
      items: [
        {src: require('@/assets/img/categories/store_green.svg')},
        {src: require('@/assets/img/categories/car_green.svg')},
        {src: require('@/assets/img/categories/cleaning_green.svg')}
      ],
      apiRequest: ""
  }),
  methods: {
      async api(){          
          try {
              let response = await axios.get("https://lucy-coatza.herokuapp.com/categories/");
              console.log(response);
          } catch (error) {
              console.log(error);
          }
      }
  },
  created() {
      this.api();
  }
};
</script>

<style lang="css" scoped>
    div{
        margin-top: 1rem;
    }
</style>