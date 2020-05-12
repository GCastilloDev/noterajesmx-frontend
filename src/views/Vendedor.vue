<template>
  <v-row style="margin-top: 55px; margin-bottom: 1rem;">
    <!-- MENSAJE  -->
    <v-snackbar top :timeout="tiempo" v-model="mensaje.mostrar">
      {{ mensaje.msg }}
      <v-btn color="pink" text @click="mensaje.mostrar = false">Cerrar</v-btn>
    </v-snackbar>
    <!-- LOADING -->
    <v-overlay :value="mostrarCargando">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-col cols="3" class="contenedor-menu">
      <MenuDashVendedor />
    </v-col>
    <v-col cols="9">
      <v-container>
        <InformacionDeContacto
          @activarLoading="activarLoading"
          @activarMensaje="activarMensaje"
          :lectura="true"
          v-if="seccionActual == 1"
        />
        <InformacionGeneralNegocio
          @activarLoading="activarLoading"
          @activarMensaje="activarMensaje"
          :lectura="true"
          v-if="seccionActual == 2"
        />
        <FotoPerfil
          @activarLoading="activarLoading"
          @activarMensaje="activarMensaje"
          :lectura="true"
          v-if="seccionActual == 3"
        />
        <CategoriasFormulario :lectura="true" v-if="seccionActual == 4" />
        <Descripcion :lectura="true" v-if="seccionActual == 5" />
        <MediosPago :lectura="true" v-if="seccionActual == 6" />
        <RedesSociales :lectura="true" v-if="seccionActual == 7" />
        <Horario :lectura="true" v-if="seccionActual == 8" />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import MenuDashVendedor from "../components/dashboard-vendedor/MenuDashVendedor";
import InformacionDeContacto from "../components/formulario/InformacionDeContacto";
import InformacionGeneralNegocio from "../components/formulario/InformacionGeneralNegocio";
import FotoPerfil from "../components/formulario/FotoPerfil";
import CategoriasFormulario from "../components/formulario/CategoriasFormulario";
import Descripcion from "../components/formulario/Descripcion";
import MediosPago from "../components/formulario/MediosPago";
import RedesSociales from "../components/formulario/RedesSociales";
import Horario from "../components/formulario/Horario";

export default {
  name: "Vendedor",
  data: () => ({
    seccionActual: 1,
    mostrarCargando: false,
    mensaje: {},
    tiempo: 3000
  }),
  components: {
    MenuDashVendedor,
    InformacionDeContacto,
    InformacionGeneralNegocio,
    FotoPerfil,
    CategoriasFormulario,
    Descripcion,
    MediosPago,
    RedesSociales,
    Horario
  },
  methods: {
    cambiarSeccion(seccion) {
      this.seccionActual = seccion;
      console.log(this.seccionActual);
    },
    activarLoading(activar) {
      this.mostrarCargando = activar;
    },
    activarMensaje(mensaje) {
      console.log(mensaje);
      this.mensaje = mensaje;
    }
  },
  watch: {
    "$route.query.seccion": {
      immediate: true,
      handler(seccion) {
        this.cambiarSeccion(seccion);
        //console.log(seccion);
      }
    }
  }
};
</script>

<style lang="css" scoped>
.contenedor-menu {
  padding: 0px;
  padding-left: 15px;
}
</style>