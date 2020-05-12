<template>
  <v-app-bar app :dense="dense" :class="classComponent" flat>
    <v-container class="d-flex align-center">
      <Login :mostrar="mostrar" @cerrarLogin="mostrarLogin" />

      <div class="d-flex align-center">
        <v-img
          alt="No te reajes logo"
          class="shrink mr-2 mouse-pointer"
          contain
          src="https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Flogo-no-te-rajes-mx.png?alt=media&token=600302f1-2411-400f-9ab5-48e9ec9eef09"
          transition="scale-transition"
          width="40"
          @click="irPrincipal"
        />
      </div>

      <v-spacer></v-spacer>
      <!-- PERFIL -->
      <v-btn depressed @click="irDashboard" text class="btn" v-if="sesion">
        <v-avatar size="28px">
          <img alt="usuario.nombre" :src="usuario.fotoPerfil" />
        </v-avatar>
        <span>{{usuario.nombre}}</span>
      </v-btn>
      <!-- MENU -->
      <v-menu offset-y v-if="sesion">
        <template v-slot:activator="{ on }">
          <v-btn icon depressed small color="morado" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="irDashboard">
            <v-list-item-title class="btn">
              <v-avatar size="28px">
                <img alt="usuario.nombre" :src="usuario.fotoPerfil" />
              </v-avatar>
              <span>{{usuario.nombre}}</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="irPrincipal">
            <v-list-item-title>
              <v-icon color="morado" class="btn" tile>mdi-home</v-icon>Inicio
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="setOverlay(true)">
            <v-icon color="morado">mdi-map-marker-radius</v-icon>
            {{ ciudad.name }}
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item>
          <v-list-item @click="cerrarSesion">
            <v-list-item-title>
              <v-icon color="morado">mdi-logout-variant</v-icon>Cerrar sesión
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- IR A INICIO -->
      <v-tooltip bottom v-if="!sesion">
        <template v-slot:activator="{ on }">
          <v-btn small icon depressed @click="irPrincipal" v-on="on">
            <v-icon color="morado" class="btn" tile>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Ir a inicio</span>
      </v-tooltip>
      <!-- INICIAR SESION -->
      <v-tooltip bottom v-if="!sesion">
        <template v-slot:activator="{ on }">
          <v-btn small icon depressed @click="mostrar = !mostrar" class="btn" v-on="on">
            <v-icon color="morado" tile>mdi-account</v-icon>
          </v-btn>
        </template>
        <span>Iniciar sesión</span>
      </v-tooltip>
      <v-toolbar-items v-if="!sesion">
        <v-btn depressed @click="setOverlay(true)" text class="btn">
          <v-icon color="morado">mdi-map-marker-radius</v-icon>
          {{ ciudad.name }}
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Login from "../components/Login";

export default {
  name: "Menu",
  components: {
    Login
  },
  data: () => ({
    mostrar: false
  }),
  props: ["dense", "classComponent"],
  methods: {
    ...mapMutations(["setOverlay"]),
    ...mapActions(["sessionDestroy"]),
    irPrincipal() {
      if (this.$route.path !== "/") this.$router.push("/");
    },
    irDashboard() {
      if (this.$route.name !== this.rol) this.$router.push({ name: this.rol });
    },
    mostrarLogin(value) {
      this.mostrar = value;
      console.log(this.mostrar);
    },
    cerrarSesion() {
      const ruta = this.$route.name;
      this.sessionDestroy(ruta);
    }
  },
  computed: {
    ...mapState(["ciudad", "sesion", "usuario", "rol"])
  }
};
</script>

<style lang="css" scoped>
.btn:hover {
  color: #71009f !important;
}

.btn {
  text-transform: capitalize;
}

.mouse-pointer {
  cursor: pointer;
}
.inactive {
  padding: 0;
  background-color: transparent !important;
}

.active {
  padding: 0;
  background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>