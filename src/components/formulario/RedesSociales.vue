<template>
  <v-row class="d-flex align-center">
    <v-col cols="12">
      <v-alert text color="purple lighten-1" icon="mdi-information">
        Los links de redes sociales servirán para poder brindarle esa información a los futuros compradores, con la finalidad de redirigirlos y generar tráfico a sus redes sociales.
        <strong>Es importante que el link sea puesto de forma correcta para que funcione, ejemplo: https://www.facebook.com/noterajesmxoficial/</strong>
      </v-alert>
      {{data}}
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
        v-model="data.facebook"
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
        v-model="data.instagram"
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
        v-model="data.twitter"
        label="Link de Twitter"
      ></v-text-field>
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
      for (const key in this.data) {
        if (this.data[key] == "") {
          this.data[key] = false;
        }
      }

      console.log(this.data);

      this.$emit("activarLoading", true);
      await setTimeout(() => {
        this.loading = false;
        this.$emit("activarLoading", false);
        this.$emit("siguiente");
      }, 3000);
    }
  }
};
</script>

<style lang="css" scoped>
.switch-center {
  margin: 0px;
}
</style>