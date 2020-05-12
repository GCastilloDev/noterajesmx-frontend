<template>
  <v-row>
    <v-col cols="6">
      <h2>Categorías</h2>
    </v-col>
    <v-col cols="6" class="d-flex justify-end" v-if="lectura">
      <v-btn outlined color="verde" @click="editar = true" :disabled="editar" class="btn-editar">
        <v-icon left>mdi-file-document-edit-outline</v-icon>Editar
      </v-btn>
      <v-btn color="verde" :disabled="!editar" :dark="editar" @click="actualizar" depressed>
        <v-icon left>mdi-content-save</v-icon>Guardar cambios
      </v-btn>
    </v-col>
    <v-col cols="12">{{data.categorias}}</v-col>
    <v-col cols="12">{{data}}</v-col>

    <v-col cols="12" v-if="! lectura">
      <v-alert
        text
        color="purple lighten-1"
        icon="mdi-information"
      >Favor de seleccionar cuando menos 1 categoría y máximo 3 con las cuales se identifique su negocio y/o servicio.</v-alert>
    </v-col>

    <v-col v-for="(categoria, index) in categorias" :key="index" cols="3" class="d-flex">
      <v-switch
        dense
        color="verde"
        v-model="data.categorias"
        :value="categoria.id"
        :label="categoria.name"
        :disabled="data.categorias.length > 2 && data.categorias.indexOf(categoria.id) === -1 || !editar"
      ></v-switch>
    </v-col>
    <v-col cols="12" class="d-flex justify-end btn" v-if="! lectura">
      <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "CategoriasFormulario",
  data: () => ({
    data: {
      categorias: []
    },
    editar: false
  }),
  props: {
    lectura: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    ...mapActions(["getCategorias"]),
    async actualizar() {
      // Cabeceras
      const config = {
        headers: {
          "X-CSRF-Token": this.token,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };
      try {
        const response = await axios.post(
          "http://lucy-coatza.herokuapp.com/store/setCategories",
          this.data,
          config
        );
        console.warn(response);
      } catch (error) {
        console.warn(error);
      }
    },
    async consultarDatos() {
      // Cabeceras
      const config = {
        headers: {
          "X-CSRF-Token": this.token,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };

      try {
        const response = await axios.get(
          "http://lucy-coatza.herokuapp.com/comercio/categorias",
          config
        );
        this.data.categorias = response.data.categorias;
      } catch (error) {
        console.warn(error);
      }
    },
    async comprobarCategorias() {
      if (this.categorias === "") {
        await this.getCategorias();
      }
    },
    async siguiente() {
      if (this.data.categorias.length == 0) {
        console.warn("Debes de seleccionar al menos una categoría");
      } else {
        this.$emit("activarLoading", true);
        await setTimeout(() => {
          this.loading = false;
          this.$emit("activarLoading", false);
          this.$emit("siguiente");
        }, 3000);
      }
    }
  },
  computed: {
    ...mapState(["categorias", "token", "sesion"])
  },
  async created() {
    await this.comprobarCategorias();
    if (this.sesion) await this.consultarDatos();
  }
};
</script>