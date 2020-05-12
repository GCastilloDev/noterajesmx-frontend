<template>
    <v-navigation-drawer permanent width="100%" class="cabecera">
      <v-list-item two-line>
        <v-list-item-avatar>
          <img :src="usuario.fotoPerfil" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">{{usuario.nombre}}</v-list-item-title>
          <v-list-item-subtitle>EL BUEN SAZÓN DE ROSA MARÍA</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group active-class="activo">
          <router-link v-for="item in items" :key="item.title" :to="item.query" class="reset">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="morado">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MenuDashVendedor",
  data: () => ({
    items: [
      {
        title: "Información de contacto",
        icon: "mdi-account",
        query: { query: { seccion: 1 } },
        activo: false
      },
      {
        title: "Información general del negocio",
        icon: "mdi-information-variant",
        query: { query: { seccion: 2 } },
        activo: false
      },
      {
        title: "Foto de perfil",
        icon: "mdi-camera",
        query: { query: { seccion: 3 } },
        activo: false
      },
      {
        title: "Categorías",
        icon: "mdi-folder-multiple",
        query: { query: { seccion: 4 } },
        activo: false
      },
      {
        title: "Descripción",
        icon: "mdi-transcribe",
        query: { query: { seccion: 5} },
        activo: false
      },
      {
        title: "Medios de pago",
        icon: "mdi-cash-multiple",
        query: { query: { seccion: 6 } },
        activo: false
      },
      {
        title: "Redes sociales",
        icon: "mdi-account-multiple",
        query: { query: { seccion: 7 } },
        activo: false
      },
      {
        title: "Horario",
        icon: "mdi-timetable",
        query: { query: { seccion: 8 } },
        activo: false
      }
    ],
    right: null
  }),
  computed: {
    ...mapState(["usuario"])
  },
  methods: {
    async activarSeccion(seccion) {
      await this.items.forEach(e => {
        if(seccion === e.query.query.seccion){
          e.activo = true
        } else {
          e.activo = false
        }
      });
      console.log(this.items);
    }
  }
};
</script>

<style lang="css" scoped>
.reset {
  text-decoration: none;
}
.activo {
  color: #71009f !important;
}

.title {
  text-transform: capitalize;
}
</style>