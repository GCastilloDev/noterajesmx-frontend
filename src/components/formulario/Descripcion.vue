<template>
  <v-row>
    <v-col cols="12">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-col cols="12">{{data}}</v-col>
        <v-col cols="12">
          <v-switch
            color="#24cc89"
            v-model="data.servicioDomicilio"
            label="¿Cuenta con servicio a domicilio?"
          ></v-switch>
        </v-col>

        <v-col cols="12">
          <v-textarea
            required
            dense
            outlined
            color="#24cc89"
            background-color="blue-grey lighten-5"
            counter
            label="Agregar una breve descripción de su negocio para que el usuario pueda verla."
            :rules="[v => !!v || 'La descripción es requerida',
      v => (v && v.length < 257) || 'Solo se permiten 256 carácteres']"
            v-model="data.descripcion"
          ></v-textarea>
        </v-col>
      </v-form>
      <v-col cols="12" class="d-flex justify-end btn">
        <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Descripcion",
  data: () => ({
    data: {
      descripcion: "",
      servicioDomicilio: false
    },
    valid: true
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
      if (this.$refs.form.validate()) {
        this.$emit("activarLoading", true);
        try {
          const response = await axios.post(
            'http://lucy-coatza.herokuapp.com/store/setDescription',
            this.data,
            config
          );

          console.log(response);

          this.loading = false;
          this.$emit("activarLoading", false);
          this.$emit("siguiente");

        } catch (error) {
          console.log(error);
        }
      } else {
        
        await setTimeout(() => {
          
        }, 3000);
      }
    }
  },
  computed: {
    ...mapState(["token"])
  }
};
</script>