<template>
  <v-row>
    <v-col>{{mediosDePago}}</v-col>
    <v-col cols="12">
      <v-alert
        text
        color="purple lighten-1"
        icon="mdi-information"
      >Eliga los medios de pago que acepta.</v-alert>
    </v-col>

    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="mediosDePago.efectivo" label="Efectivo"></v-switch>
    </v-col>
    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="mediosDePago.transferencia" label="Transferencia"></v-switch>
    </v-col>
    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="mediosDePago.tarjetaLocal" label="Tarjeta en el local"></v-switch>
    </v-col>
    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="mediosDePago.tarjetaContraEntrega" label="Tarjeta contra entrega(en servicio a domicilio)"></v-switch>
    </v-col>
    <v-col cols="12" class="d-flex justify-end btn">
      <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
import { mapState } from "vuex";

export default {
  name: "MediosPago",
  data: () => ({
    mediosDePago: {
      efectivo: true,
      transferencia: false,
      tarjetaLocal: false,
      tarjetaContraEntrega: false
    }
  }),
  methods: {
    async siguiente() {
      // Cabeceras
      const config = {
        headers: {
          "X-CSRF-Token": this.token,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };
      this.$emit("activarLoading", true);

      const data = {};
      data.mediosDePago = this.mediosDePago;
     
      console.log(data);
      try {
        const response = await axios.post('http://lucy-coatza.herokuapp.com/store/setPayment',
        data,
        config);

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

.switch {
    padding: 0px !important;
}
</style>