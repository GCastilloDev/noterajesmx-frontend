<template>
    <div>
        <v-app-bar
      app
      color="grey lighten-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo-no-te-rajes-mx.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data: () => ({
            color: "dark"
        })
    }
</script>

<style lang="css" scoped>

</style>