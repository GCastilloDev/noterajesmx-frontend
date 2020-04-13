<template>
  <v-row justify="center">
    <v-overlay :z-index="zIndex" :value="overlay" opacity=".8">
      <v-row justify="center">
        <v-col cols="12" align="center">
          <p>
            <v-select
              :loading="loading"
              v-model="ciudad"
              loader-height="3"
              :disabled="disabled"
              :items="items"
              item-color="purple"
              flat
              prepend-icon="mdi-map-marker-radius"
              label="Selecciona una ciudad"
              dense
              @change="guardarSeleccion"
            ></v-select>
          </p>
        </v-col>
      </v-row>
    </v-overlay>
  </v-row>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex"
export default {
  name: "OverlayCiudades",
  data: () => ({
    ciudad: "",
    zIndex: 999,
    items: [],
    loading: true,
    disabled: true
  }),
  methods: {
      ...mapActions(["getCiudades"]),
      ...mapMutations(["setCiudad", "setOverlay"]),

      async cargarSelect() {
          await this.getCiudades();
          await this.ciudades.forEach(element => {
              let ciudad = {};
              ciudad.text = element.name;
              ciudad.value = 
              {
                id: element.id,
                name: element.name
              };
              this.items.push(ciudad);
          });
          this.loading = false;
          this.disabled = false;          
      },
      guardarLocalStorage() {
        localStorage.setItem("city", JSON.stringify(this.ciudad));
      },
      guardarSeleccion() {
        this.setCiudad(this.ciudad);
        this.guardarLocalStorage();
        this.setOverlay(false);        
      }
  },
  computed: {
      ...mapState(["ciudades","overlay"])
  },
  created() {
      this.cargarSelect();
  }
};
</script>