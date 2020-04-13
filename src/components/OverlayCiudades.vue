<template>
  <v-row justify="center">
    <v-overlay :z-index="zIndex" :value="overlay">
      <v-row justify="center">
        <v-col cols="12" align="center">
          <p>
            <v-select
              :loading="loading"
              loader-height="3"
              :disabled="disabled"
              :items="items"
              item-color="purple"
              flat
              prepend-icon="mdi-map-marker-radius"
              label="Selecciona una ciudad"
              dense
              @change="overlay = false"
            ></v-select>
          </p>
        </v-col>
      </v-row>
    </v-overlay>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  name: "OverlayCiudades",
  data: () => ({
    zIndex: 999,
    overlay: true,
    items: [],
    loading: true,
    disabled: true
  }),
  methods: {
      ...mapActions(["getCiudades"]),
      async cargarSelect() {
          await this.getCiudades();
          await this.ciudades.forEach(element => {
              let ciudad = {};
              ciudad.text = element.name;
              ciudad.value = element.id;
              this.items.push(ciudad);
          });
          this.loading = false;
          this.disabled = false;          
      }
  },
  computed: {
      ...mapState(["ciudades"])
  },
  created() {
      this.cargarSelect();
  }
};
</script>