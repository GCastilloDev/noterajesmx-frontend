<template>
  <v-row>
    <v-col cols="6" v-if="lectura">
      <h2>Información general del negocio</h2>
    </v-col>
    <v-col cols="6" class="d-flex justify-end" v-if="lectura">
      <v-btn outlined color="verde" @click="editar = true" :disabled="editar" class="btn-editar">
        <v-icon left>mdi-file-document-edit-outline</v-icon>Editar
      </v-btn>
      <v-btn color="verde" :disabled="!editar" :dark="editar" @click="actualizar" depressed>
        <v-icon left>mdi-content-save</v-icon>Guardar cambios
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <!-- NOMBRE COMERCIAL -->
          <v-col cols="12" class="formulario-contenedor">
            <v-text-field
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Nombre comercial"
              background-color="blue-grey lighten-5"
              v-model="data.nombreComercial"
              :rules="[
            v => !!v || 'El campo es requerido',
            v => (v && v.length >= 3) || 'El campo debe contener más de 3 carácteres'
            ]"
              required
            ></v-text-field>
          </v-col>

          <!-- CIUDADES -->
          <v-col cols="6">
            <v-autocomplete
              dense
              outlined
              color="verde"
              item-color="verde"
              background-color="blue-grey lighten-5"
              :loading="loadingCiudades"
              :disabled="!editar"
              :hint="ciudades.length == 0 ? 'Cargando ciudades' : ''"
              persistent-hint
              @change="obtenerColonias"
              v-model="data.ciudad"
              :items="ciudades"
              :rules="[v => !!v || 'Campo requerido']"
              label="Ciudad"
              required
            ></v-autocomplete>
          </v-col>

          <!-- COLONIAS -->
          <v-col cols="6">
            <v-autocomplete
              dense
              outlined
              :loading="loadingColonias"
              :disabled="!editar"
              color="verde"
              item-color="verde"
              background-color="blue-grey lighten-5"
              :hint="colonias.length == 0 ? 'Cargando colonias' : ''"
              persistent-hint
              v-model="data.colonia"
              :items="colonias"
              :rules="[v => !!v || 'Campo requerido']"
              label="Colonia"
              required
            ></v-autocomplete>
          </v-col>

          <!-- TELEFONO CELULAR -->
          <v-col cols="6" class="formulario-contenedor">
            <v-text-field
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Télefono celular"
              background-color="blue-grey lighten-5"
              v-model="data.telefonoCelular"
              type="text"
              :rules="[
            v => !!v || 'El campo es requerido',
            v => /^[0-9]*$/.test(v) || 'Formato no válido',
            v => (v && v.length == 10) || 'El teléfono debe contener 10 carácteres'
            ]"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6" class="formulario-contenedor">
            <v-switch
              :disabled="!editar"
              prepend-icon="mdi-whatsapp"
              color="#24cc89"
              v-model="data.whatsApp"
              label="¿El número cuenta con WhatsApp?"
            ></v-switch>
          </v-col>
        </v-row>
      </v-form>
      <v-col cols="12" class="d-flex justify-end btn" v-if="! lectura">
        <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "InformacionGeneralNegocio",
  data: () => ({
    data: {
      whatsApp: false
    },
    ciudades: [],
    colonias: [],
    loadingCiudades: true,
    loadingColonias: true,
    valid: true,
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
    async actualizar() {
      const config = {
        headers: {
          "X-CSRF-Token": this.token,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };

      let mensaje = {
        mostrar: true
      };

      if (this.$refs.form.validate()) {
        this.$emit("activarLoading", true);

        try {
          const response = await axios.put(
            "http://lucy-coatza.herokuapp.com/update/store",
            this.data,
            config
          );
          console.warn(response);

          mensaje.msg = response.data.message;
          this.editar = false;
          this.$emit("activarLoading", false);
          this.$emit("activarMensaje", mensaje);
        } catch (error) {
          mensaje.msg = "Hubo un error al actualizar su información.";
          this.editar = false;
          this.$emit("activarLoading", false);
          this.$emit("activarMensaje", mensaje);
        }
      }
    },
    async obtenerDatos() {
      const config = {
        headers: {
          "X-CSRF-Token": this.token,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };

      try {
        let response = await axios.get(
          "http://lucy-coatza.herokuapp.com/comercio",
          config
        );

        response.data.ciudad = await this.convertirTexto(response.data.ciudad);
        this.data = response.data;
        await this.obtenerColonias();
      } catch (e) {
        console.log(e);
      }
    },
    convertirTexto(texto) {
      const limite = texto.length;
      let textoNuevo = "";

      for (let index = 0; index < limite; index++) {
        if (index == 0) textoNuevo += texto.charAt(index).toUpperCase();
        else textoNuevo += texto.charAt(index).toLowerCase();
      }

      return textoNuevo;
    },
    async obtenerCiudades() {
      try {
        const response = await axios.get(
          "http://lucy-coatza.herokuapp.com/municipios"
        );
        this.ciudades = await response.data.municipios.sort();
        this.loadingCiudades = false;
      } catch (error) {
        console.log(error);
      }
    },
    async obtenerColonias() {
      if (this.data.ciudad !== undefined && this.data.ciudad !== "") {
        try {
          const response = await axios.get(
            `http://lucy-coatza.herokuapp.com/municipio/${this.data.ciudad}/colonias`
          );
          this.colonias = await response.data.colonias.sort();
          this.loadingColonias = false;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async siguiente() {
      if (this.$refs.form.validate()) {
        this.$emit("activarLoading", true);
        try {
          console.log(this.token);
          const response = await axios.post(
            "http://lucy-coatza.herokuapp.com/store/create",
            this.data,
            { headers: { "X-CSRF-Token": this.token } }
          );
          console.log(response);
          this.$emit("activarLoading", false);
          this.$emit("siguiente");
        } catch (error) {
          console.warn(error);
          this.$emit("activarLoading", false);
        }
      }
    }
  },
  computed: {
    ...mapState(["sesion", "token"])
  },
  created() {
    this.obtenerCiudades();
    if (!this.sesion) this.editar = true;
    if (this.sesion) this.obtenerDatos();
  }
};
</script>

<style lang="css">
.btn-editar {
  margin-right: 1rem;
}
</style>