<template>
  <v-row>
    <v-col cols="12" v-if="correoDuplicado">
      <v-alert type="error" dismissible>Correo ya registrado anteriormente.</v-alert>
    </v-col>
    <v-col cols="6" v-if="lectura">
      <h2>Información de contacto</h2>
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
          <!-- NOMBRE -->
          <v-col cols="4" class="formulario-contenedor">
            <v-text-field
              dense
              outlined
              color="verde"
              label="Nombre(s)"
              background-color="blue-grey lighten-5"
              v-model="informacionBasica.nombre"
              :rules="[
            v => !!v || 'El campo es requerido',
            v => (v && v.length >= 3) || 'El campo debe contener más de 3 carácteres'
            ]"
              required
              :disabled="!editar"
            ></v-text-field>
          </v-col>

          <!-- APELLIDO -->
          <v-col cols="5" class="formulario-contenedor">
            <v-text-field
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Apellidos"
              background-color="blue-grey lighten-5"
              v-model="informacionBasica.apellidos"
              :rules="[
            v => !!v || 'El campo es requerido',
            v => (v && v.length >= 3) || 'El campo debe contener más de 3 carácteres'
            ]"
              required
            ></v-text-field>
          </v-col>

          <!-- SEXO -->
          <v-col cols="3" class="formulario-contenedor">
            <v-select
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Sexo"
              background-color="blue-grey lighten-5"
              item-color="verde"
              v-model="informacionBasica.sexo"
              :items="sexo"
              :rules="[v => !!v || 'El campo es requerido']"
              required
            ></v-select>
          </v-col>

          <!-- CORREO -->
          <v-col cols="6" class="formulario-contenedor">
            <v-text-field
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Correo"
              background-color="blue-grey lighten-5"
              v-model="informacionBasica.correo"
              :rules="[
            v => !!v || 'El campo es requerido',
            v => /.+@.+\..+/.test(v) || 'Formato de correo no válido'
            ]"
              required
            ></v-text-field>
          </v-col>

          <!-- CORREO CONFIRMACION -->
          <v-col cols="6" class="formulario-contenedor">
            <v-text-field
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Confirmar correo"
              background-color="blue-grey lighten-5"
              v-model="correo"
              :rules="reglaCorreoConfirmacion"
              required
            ></v-text-field>
          </v-col>

          <!-- PASSWORD -->
          <v-col cols="6" class="formulario-contenedor">
            <v-text-field
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Password"
              background-color="blue-grey lighten-5"
              v-model="informacionBasica.password"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              :rules="[
            v => !!v || 'El campo es requerido',
            v => (v && v.length > 6) || 'La contraseña debe contener mas de 6 carácteres'
            ]"
              required
            ></v-text-field>
          </v-col>

          <!-- PASSWORD CONFIRMACION -->
          <v-col cols="6" class="formulario-contenedor">
            <v-text-field
              :disabled="!editar"
              dense
              outlined
              color="verde"
              label="Confirmar contraseña"
              background-color="blue-grey lighten-5"
              v-model="password"
              :type="show1 ? 'text' : 'password'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              :rules="reglaContraseñaConfirmacion"
              required
            ></v-text-field>
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
              v-model="informacionBasica.telefonoCelular"
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
              v-model="informacionBasica.whatsApp"
              label="¿El número cuenta con WhatsApp?"
            ></v-switch>
          </v-col>
        </v-row>
      </v-form>
      <v-col cols="12" class="d-flex justify-end btn" v-if="! lectura">
        <v-btn
          :disabled="!editar"
          color="verde"
          dark
          large
          elevation="0"
          @click="siguiente"
          block
        >Continuar</v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "InformacionDeContacto",
  data: () => ({
    correoDuplicado: false,
    show: false,
    show1: false,
    editar: false,
    informacionBasica: {
      whatsApp: false
    },
    sexo: ["Femenino", "Masculino"],
    password: "",
    correo: "",
    valid: true
  }),
  props: {
    lectura: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    ...mapMutations(["cambiarNombre", "registrarToken"]),
    async siguiente() {
      if (this.$refs.form.validate()) {
        this.$emit("activarLoading", true);
        try {
          const response = await axios.post(
            "http://lucy-coatza.herokuapp.com/user/create",
            this.informacionBasica
          );
          console.log(response);
          if (response.status === 200) {
            this.registrarToken(response.data.token);
            this.$emit("siguiente");
          }

          if (response.status === 202) {
            this.correoDuplicado = true;
          }

          this.$emit("activarLoading", false);
        } catch (error) {
          this.$emit("activarLoading", false);
          console.warn(error);
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
          "http://lucy-coatza.herokuapp.com/user",
          config
        );
        console.log(response);
        const sexo = await this.convertirSexo(response.data.sexo);
        response.data.sexo = sexo;
        this.correo = response.data.correo;
        this.password = response.data.password;
        this.informacionBasica = response.data;
      } catch (e) {
        console.log(e);
      }
    },
    async actualizar() {
      if (this.$refs.form.validate()) {
        this.$emit("activarLoading", true);
        try {
          const config = {
            headers: {
              "X-CSRF-Token": this.token,
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          };

          delete this.informacionBasica.activado;

          const response = await axios.put(
            "http://lucy-coatza.herokuapp.com/update/user",
            this.informacionBasica,
            config
          );
          const mensaje = {
            msg: response.data.message,
            mostrar: true
          };
          this.cambiarNombre(this.informacionBasica.nombre);
          this.editar = false;
          this.$emit("activarLoading", false);
          this.$emit("activarMensaje", mensaje);
        } catch (error) {
          const mensaje = {
            msg: "Hubo un error al actualizar su información.",
            mostrar: true
          };

          this.editar = false;
          this.$emit("activarLoading", false);
          this.$emit("activarMensaje", mensaje);
        }
      }
    },
    convertirSexo(sexo) {
      const limite = sexo.length;
      let sexoNuevo = "";

      for (let index = 0; index < limite; index++) {
        if (index == 0) sexoNuevo += sexo.charAt(index).toUpperCase();
        else sexoNuevo += sexo.charAt(index).toLowerCase();
      }

      return sexoNuevo;
    }
  },
  computed: {
    ...mapState(["token", "sesion"]),
    reglaContraseñaConfirmacion() {
      return [
        () =>
          this.informacionBasica.password === this.password ||
          "Las contraseñas no son iguales",
        v => !!v || "Confirmación de la contraseña es requerida"
      ];
    },
    reglaCorreoConfirmacion() {
      return [
        () =>
          this.informacionBasica.correo === this.correo ||
          "Los correos no son iguales",
        v => !!v || "Confirmación del correo es requerida"
      ];
    }
  },
  mounted() {
    this.editar = this.lectura ? false : true;
  },
  created() {
    if (this.sesion) this.obtenerDatos();
  }
};
</script>

<style lang="css" scoped>
.formulario-contenedor {
  padding: 0px 12px;
}

.btn {
  padding: 0px 0px;
}

span {
  font-size: 0.9rem;
}
</style>