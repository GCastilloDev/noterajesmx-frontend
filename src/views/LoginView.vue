<template>
  <div>
    <BannerLogin />
    <Login 
    />
    <v-btn @click="mostrarE">abre</v-btn>
  </div>
</template>

<script>
import BannerLogin from "../components/BannerLogin";
import Login from "../components/Login";

export default {
  name: "LoginView",
  components: {
    BannerLogin,
    Login
  },
  data: () => ({
    mostrar: true
  }),
  methods: {
    mostrarE() {
      this.mostrar = true;
      console.log(this.mostrar)
    },
    mostrarLogin(value) {
      this.mostrar = value;
      console.log(this.mostrar)
    }
  }
};
</script>

<style lang="css" scoped>

.card {
  margin-top: -130px;
}
</style>