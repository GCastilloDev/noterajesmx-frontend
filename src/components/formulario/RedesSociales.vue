<template>
  <v-row class="d-flex align-center">
    <v-col cols="12">
      <v-alert text color="purple lighten-1" icon="mdi-information">
        Los links de redes sociales servirán para poder brindarle esa información a los futuros compradores, con la finalidad de redirigirlos y generar tráfico a sus redes sociales.
        <strong>Es importante que el link sea puesto de forma correcta para que funcione, ejemplo: https://www.facebook.com/noterajesmxoficial/</strong>
      </v-alert>
      {{redesSociales}}
    </v-col>

    <v-col cols="4">
      <v-switch
        class="switch-center"
        color="#24cc89"
        v-model="facebook"
        label="Agregar link de Facebook"
      ></v-switch>
    </v-col>

    <v-col cols="8">
      <v-text-field
        v-if="facebook"
        background-color="blue-grey lighten-5"
        outlined
        color="verde"
        dense
        v-model="redesSociales.facebook"
        label="Link de Facebook"
      ></v-text-field>
    </v-col>

    <v-col cols="4">
      <v-switch
        class="switch-center"
        color="#24cc89"
        v-model="instagram"
        label="Agregar link de Instagram"
      ></v-switch>
    </v-col>

    <v-col cols="8">
      <v-text-field
        v-if="instagram"
        background-color="blue-grey lighten-5"
        outlined
        color="verde"
        dense
        v-model="redesSociales.instagram"
        label="Link de Instagram"
      ></v-text-field>
    </v-col>

    <v-col cols="4">
      <v-switch
        class="switch-center"
        color="#24cc89"
        v-model="twitter"
        label="Agregar link de Twitter"
      ></v-switch>
    </v-col>

    <v-col cols="8">
      <v-text-field
        v-if="twitter"
        background-color="blue-grey lighten-5"
        outlined
        color="verde"
        dense
        v-model="redesSociales.twitter"
        label="Link de Twitter"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="d-flex justify-end btn">
      <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';

export default {
  name: "RedesSociales",
  data: () => ({
    redesSociales: {
      facebook: "",
      instagram: "",
      twitter: ""
    },
    facebook: false,
    instagram: false,
    twitter: false
  }),
  methods: {
    async siguiente() {
      this.$emit("activarLoading", true);
      // Cabeceras
      const config = {
        headers: {
          "X-CSRF-Token": this.token,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };

      for (const key in this.redesSociales) {
        if (this.redesSociales[key] == "") {
          this.redesSociales[key] = false;
        }
      }

      const data = {};
      data.redesSociales = this.redesSociales;

      console.log(data);

      try {
        const response = await axios.post(
          "http://lucy-coatza.herokuapp.com/store/setRedesSociales",
          data,
          config
        );

        console.log(response);

        this.loading = false;
        this.$emit("activarLoading", false);
        this.$emit("siguiente");

      } catch (error) {
        console.log(error);
      }

      
    }
  },
  computed: {
    ...mapState(["token"])
  }
};
</script>

<style lang="css" scoped>
.switch-center {
  margin: 0px;
}
</style>