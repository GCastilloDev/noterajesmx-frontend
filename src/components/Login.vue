<template>
  <v-dialog v-model="mostrar" persistent max-width="500px">
    <v-card :loading="loading">
      <v-container class="container">
        <v-row class="d-flex">
          <v-col cols="12" class="d-flex justify-center">
            <v-icon class="account-icon">mdi-account-circle</v-icon>
          </v-col>
          <v-col cols="12" v-if="mostrarError">
            <v-alert dense text type="error">{{errorMensaje}}</v-alert>
          </v-col>
          <v-container>
            <v-col cols="12">
              <v-form ref="form" v-model="valid" lazy-validation class="form">
                <v-text-field
                  color="verde"
                  outlined
                  background-color="blue-grey lighten-5"
                  autofocus
                  prepend-inner-icon="mdi-email-outline"
                  v-model="email"
                  :rules="emailRules"
                  label="Correo"
                  required
                  class="input"
                ></v-text-field>

                <v-text-field
                  color="verde"
                  outlined
                  background-color="blue-grey lighten-5"
                  prepend-inner-icon="mdi-account-key-outline"
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  label="Contraseña"
                  required
                  class="input"
                ></v-text-field>

                <v-btn block color="verde" dark large depressed @click="validarFormulario">ingresar</v-btn>
                <v-row>
                  <v-col cols="12" class="d-flex justify-end">
                    <v-btn text dense class="d-flex justify-end" color="red" @click="salir">
                      Salir
                      <v-icon class="icono">mdi-close-circle-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-container>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import { VBtn } from 'vuetify/lib/components/VBtn';

export default {
  name: "Login",
  props: ["mostrar"],
  data: () => ({
    valid: true,
    loading: false,
    errorMensaje: "",
    mostrarError: false,
    password: "1234567890",
    passwordRules: [v => !!v || "La contraseña es requerida"],
    email: "ilse@gmail.com",
    emailRules: [
      v => !!v || "El correo es requerido",
      v => /.+@.+\..+/.test(v) || "El correo no es válido"
    ]
  }),
  methods: {
    ...mapActions(["getCredentials","sessionStart"]),
    async iniciarSesion() {
      this.mostrarError = false;
      const credenciales = {
        correo: this.email,
        password: this.password
      };      

      try {
        const response = await axios.post(
          "http://lucy-coatza.herokuapp.com/session/login",
          credenciales
        );

        console.log(response);

        switch (response.status) {
          case 200:
            this.sessionStart(response.data);
            this.loading = false;
            this.$emit("cerrarLogin", false);
            break;

          case 202:
            this.errorMensaje = response.data.message;
            this.mostrarError = true;
            this.loading = false;
            break;

          default:
            break;
        }
      } catch (error) {
        console.warn(error);
      }
    },
    validarFormulario() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.iniciarSesion();
      }
    },
    salir() {
      this.$refs.form.resetValidation();
      this.loading = false;
      this.mostrarError = false;
      this.errorMensaje = "";
      this.password = "";
      this.email = "";
      this.$emit("cerrarLogin", false);
    }
  }
};
</script>

<style lang="css" scoped>
/* #   morado */
/* #24CC89 VERDE */
.input {
  margin: 1rem 0;
}

.avatar-icon {
  margin-top: 1rem;
}

.account-icon {
  color: #24cc89 !important;
  font-size: 5rem !important;
}

.container {
  padding-bottom: 0px;
}

.icono {
  font-size: 1rem !important;
  padding-bottom: 0.1rem;
}
</style>