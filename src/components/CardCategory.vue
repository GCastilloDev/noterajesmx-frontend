<template>
  <div class="deep-purple lighten-5">
    <v-container>
      <v-row>
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
              <v-card
                @click="goCategory(item.id, item.name)"
                :elevation="hover ? 24 : 6"
                tile
                class="mouse-pointer"
              >
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
import { mapMutations } from "vuex";

export default {
  name: "CardCategory",
  props: ["data", "ciudad"],
  methods: {
    ...mapMutations(["setCategoria"]),
    goCategory(idCategoria, categoria) {
      this.setCategoria(categoria);
      this.$router.push({
        name: "categoria",
        params: {
          categoria: idCategoria,
          idCiudad: this.ciudad
        }
      });
    }
  }
};
</script>

<style lang="css" scoped>
.titulo {
  padding: 0.2rem;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

.mouse-pointer:hover {
  cursor: pointer;
}
</style>