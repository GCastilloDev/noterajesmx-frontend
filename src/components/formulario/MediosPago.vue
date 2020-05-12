<template>
  <v-row>
    <v-col>{{data}}</v-col>
    <v-col cols="12">
      <v-alert
        text
        color="purple lighten-1"
        icon="mdi-information"
      >Eliga los medios de pago que acepta.</v-alert>
    </v-col>

    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="data.efectivo" label="Efectivo"></v-switch>
    </v-col>
    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="data.transferencia" label="Transferencia"></v-switch>
    </v-col>
    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="data.tarjetaLocal" label="Tarjeta en el local"></v-switch>
    </v-col>
    <v-col cols="6" class="d-flex justify-center switch">
      <v-switch dense color="verde" v-model="data.tarjetaContraEntrega" label="Tarjeta contra entrega(en servicio a domicilio)"></v-switch>
    </v-col>
    <v-col cols="12" class="d-flex justify-end btn">
      <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MediosPago",
  data: () => ({
    data: {
      efectivo: true,
      transferencia: false,
      tarjetaLocal: false,
      tarjetaContraEntrega: false
    }
  }),
  methods: {
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
  }
};
</script>

<style lang="css" scoped>

.switch {
    padding: 0px !important;
}
</style>