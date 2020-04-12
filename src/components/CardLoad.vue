<template>
  <div class="deep-purple lighten-5">
    <v-container>
      <v-row dense>
        <v-col
          cols="4"
          md="2"
          class="d-flex child-flex"
          v-for="(n, index) in numberCards"
          :key="index"
        >
          <v-sheet color="grey darken-2">
            <v-skeleton-loader elevation="4" type="article"></v-skeleton-loader>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CardLoad",
  props: ["numberCards"]
};
</script>