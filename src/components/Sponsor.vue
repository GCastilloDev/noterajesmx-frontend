<template>
  <div class="div-sponsor blue-grey darken-1">
    <v-row align="center" class="prueba">
      <v-col cols="12">
        <h3 class="text-center sponsor-title">Patrocinadores</h3>
      </v-col>
      <v-col
        cols="4"
        sm="2"
        justify="center"
        align="center"
        align-content="center"
        v-for="(imagen, index) in imagenes"
        :key="index"
      >
        <a v-if="imagen.href === '#'" :href="imagen.href">
          <img class="sponsor" :src="imagen.src" :width="imagen.width" />
        </a>
        <a v-else :href="imagen.href" target="_blank">
          <img class="sponsor" :src="imagen.src" :width="imagen.width" />
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Sponsor",
  data: () => ({
    imagenes: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Flogo-no-te-rajes-mx.png?alt=media&token=600302f1-2411-400f-9ab5-48e9ec9eef09",
        width: "75%",
        href: "#"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Fsponsor%2Flogo-yso.png?alt=media&token=962bfe26-818c-49bc-9517-cd7947114f28",
        width: "75%",
        href: "http://www.yursoldout.com/"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Fsponsor%2Fcoacheduonline-logo.png?alt=media&token=9ed7198c-5508-4d18-964b-957813930652",
        width: "73%",
        href: "https://www.facebook.com/landyareth"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Fsponsor%2Fbeekha-logo.png?alt=media&token=610f5440-cf40-496c-ac2f-b5c8b2820c80",
        width: "100%",
        href: "https://www.facebook.com/beekha.mx/"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Fsponsor%2Flogoreg10.png?alt=media&token=b9407ad9-6866-4e63-965a-711de8cc0981",
        width: "100%",
        href: "https://www.facebook.com/MartinJPatinoZamora/"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Fsponsor%2Flogo-abril-a-color.png?alt=media&token=068055c1-73d7-4237-9832-84ce3bfa52e2",
        width: "100%",
        href: "https://abrildg.com/"
      }
    ]
  })
};
</script>


<style lang="css" scoped>
.sponsor-title {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  color: white;
}
.sponsor {
  filter: grayscale(100%);
  transition: all 0.7s;
}

.sponsor:hover {
  filter: grayscale(0%);
  width: 72%;
  cursor: pointer;
}

.div-sponsor {
  padding-bottom: 2rem;
}

.prueba {
  margin: 0px !important;
}
</style>