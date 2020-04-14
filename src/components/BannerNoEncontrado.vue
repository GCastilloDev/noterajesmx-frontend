<template>
    <v-row align="center" class="deep-purple lighten-5">
      <v-col cols="12" md="7" justify="center" align="center" align-content="center">
        <p class="categoria-title">Lo sentimos, por el momento no hay negocios registrados
             de esta categoría en {{ciudad.name}}, regresa pronto!
        </p>
      </v-col>
      <v-col cols="12" md="5" justify="center" align="center" align-content="center">
        <v-img src="@/assets/img/no_encontrado.svg" width="80%" />
      </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex"

    export default {
        name: "BannerNoEncontrado",
        computed: {
            ...mapState(["categoria","ciudad"])
        }

    }
</script>

<style lang="css" scoped>

.categoria-title {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color:#24CC89;
}
</style>