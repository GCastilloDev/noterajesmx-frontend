<template>
  <v-row>
    <v-col cols="12">
      <v-form ref="form" v-model="valid" lazy-validation>
          <v-col col="12">{{dias}}
          </v-col>
        <v-col cols="12">
          <v-switch
            @change="cambiarEspecificarHorario"
            color="verde"
            label="Abierto todo el día"
            v-model="abiertoSiempre"
          ></v-switch>
        </v-col>
        <v-col cols="12">
          <v-switch
            @change="cambiarAbiertoSiempre"
            color="verde"
            label="Especificar horario"
            v-model="especificarHorario"
          ></v-switch>
        </v-col>
        <div v-if="especificarHorario">
          <v-col cols="12" v-for="dia in dias" :key="dia.dia">
            <v-row>
              <v-col cols="3">
                <v-switch color="#24cc89" v-model="dia.abierto" :label="dia.dia"></v-switch>
              </v-col>
              <v-col cols="4" v-if="dia.abierto">
                <v-select
                  v-model="dia.horarioApertura"
                  :items="horario"
                  label="Horario apertura"
                  :rules="[v => !!v || 'Campo requerido']"
                  :required="!dia.abierto"
                  :disabled="!dia.abierto"
                ></v-select>
              </v-col>
              <v-col cols="4" v-if="dia.abierto">
                <v-select
                  v-model="dia.horarioCierre"
                  :items="horario"
                  label="Horario cierre"
                  :required="!dia.abierto"
                  :disabled="!dia.abierto"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
        </div>
      </v-form>
    </v-col>
    <v-col cols="12" class="d-flex justify-end btn">
      <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Horario",
  data: () => ({
    dias: [
      {
        dia: "Lunes",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Martes",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Miércoles",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Jueves",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Viernes",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Sábado",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Domingo",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      }
    ],
    horario: [
      "01:00 hrs.",
      "02:00 hrs.",
      "03:00 hrs.",
      "04:00 hrs.",
      "05:00 hrs.",
      "06:00 hrs.",
      "07:00 hrs.",
      "08:00 hrs.",
      "09:00 hrs.",
      "10:00 hrs.",
      "11:00 hrs.",
      "12:00 hrs.",
      "13:00 hrs.",
      "14:00 hrs.",
      "15:00 hrs.",
      "16:00 hrs.",
      "17:00 hrs.",
      "18:00 hrs.",
      "19:00 hrs.",
      "20:00 hrs.",
      "21:00 hrs.",
      "22:00 hrs.",
      "23:00 hrs.",
      "24:00 hrs."
    ],
    abiertoSiempre: true,
    especificarHorario: false,
    valid: true
  }),
  methods: {
    async siguiente() {
      console.log(this.$refs.form.validate());
      /*
        this.$emit("activarLoading", true);
        await setTimeout(() => {
            this.loading = false;
            this.$emit("activarLoading", false);
            this.$emit("siguiente");
        }, 3000);
        */
    },
    cambiarEspecificarHorario() {
      if (this.especificarHorario == this.abiertoSiempre) {
        this.especificarHorario = !this.abiertoSiempre;
      }
    },
    cambiarAbiertoSiempre() {
      if (this.especificarHorario == this.abiertoSiempre) {
        this.abiertoSiempre = !this.especificarHorario;
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