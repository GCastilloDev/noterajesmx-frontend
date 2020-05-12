<template>
  <v-container>
    <v-overlay :value="carga" opacity=".7">
      <v-progress-circular indeterminate size="64">
        <span class="procesando-texto">Procesando...</span>
      </v-progress-circular>
    </v-overlay>
    <v-row class="d-flex justify-center">
      <v-col cols="10">
        <v-card>
          <v-stepper v-model="step" vertical>
            <v-stepper-step color="verde" :complete="step > 1" step="1">Información de contacto</v-stepper-step>
            <v-stepper-content step="1">
              <InformacionDeContacto
                v-if="step == 1"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>

            <v-stepper-step
              color="verde"
              :complete="step > 2"
              step="2"
            >Información general del negocio</v-stepper-step>

            <v-stepper-content step="2">
              <InformacionGeneralNegocio
                v-if="step == 2"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>

            <v-stepper-step color="verde" :complete="step > 3" step="3">Foto de perfil</v-stepper-step>

            <v-stepper-content step="3">
              <FotoPerfil
                v-if="step == 3"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>

            <v-stepper-step color="verde" :complete="step > 4" step="4">Categorías</v-stepper-step>
            <v-stepper-content step="4">
              <CategoriasFormulario
                v-if="step == 4"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>

            <v-stepper-step color="verde" :complete="step > 5" step="5">Descripción</v-stepper-step>
            <v-stepper-content step="5">
              <Descripcion
                v-if="step == 5"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>

            <v-stepper-step color="verde" :complete="step > 6" step="6">Medios de pago</v-stepper-step>
            <v-stepper-content step="6">
              <MediosPago
                v-if="step == 6"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>

            <v-stepper-step color="verde" :complete="step > 7" step="7">Redes sociales</v-stepper-step>
            <v-stepper-content step="7">
              <RedesSociales
                v-if="step == 7"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>

            <v-stepper-step color="verde" :complete="step > 8" step="8">Horario</v-stepper-step>
            <v-stepper-content step="8">
              <Horario
                v-if="step == 8"
                @activarLoading="activarLoading"
                @siguiente="cambiarPaso"
              />
            </v-stepper-content>
          </v-stepper>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InformacionDeContacto from "../../components/formulario/InformacionDeContacto";
import InformacionGeneralNegocio from "../../components/formulario/InformacionGeneralNegocio";
import FotoPerfil from "../../components/formulario/FotoPerfil";
import CategoriasFormulario from "../../components/formulario/CategoriasFormulario";
import Descripcion from "../../components/formulario/Descripcion";
import MediosPago from "../../components/formulario/MediosPago";
import RedesSociales from "../../components/formulario/RedesSociales";
import Horario from "../../components/formulario/Horario";


export default {
  name: "CrearCuenta",
  components: {
    InformacionDeContacto,
    InformacionGeneralNegocio,
    FotoPerfil,
    CategoriasFormulario,
    Descripcion,
    MediosPago,
    RedesSociales,
    Horario
  },
  data: () => ({
    step: 2,
    carga: false
  }),
  methods: {
    activarLoading(valor) {
      this.carga = valor;
    },
    cambiarPaso() {
      this.step++;
    }
  }
};
</script>

<style lang="css" scoped>
.procesando-texto {
  padding-top: 6rem;
}
</style>