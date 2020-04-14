<template>
  <div>
    <v-footer dark class="blue-grey darken-1 white--text text-center">
      <v-card flat tile class="contenedor blue-grey darken-1">
        <v-card-text>
          <a v-for="(item, index) in socialNetwork" :key="index" :href="item.link" target="_blank">
            <v-btn  class="mx-4 white--text" icon>
            <v-icon size="24px">{{ item.icono }}</v-icon>
          </v-btn>
          </a>
        </v-card-text>

        <v-card-text
          class="white--text pt-0 slogan"
        >!Jalamos juntos!</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          No te rajes MX {{ new Date().getFullYear() }} — Desarrollado por
          <strong>Beekhá</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
      socialNetwork: [
        {
          icono: 'mdi-facebook',
          link: "https://www.facebook.com/noterajesmxoficial"
        },
        {
          icono: 'mdi-instagram',
          link: "https://instagram.com/noterajesmxoficial"
        }        
      ],
    }),
};
</script>

<style lang="css" scoped>
.contenedor {
    width: 100%;
    margin: 0;
    padding: 0;
}

.slogan {
  font-size: 1.3rem;
}

a {
  text-decoration: none;
}
</style>