<template>
  <div class="deep-purple lighten-5">
    <v-container>
        <h3 class="text-center sponsor-title">Preguntas frecuentes</h3>
      <v-expansion-panels v-model="panel">
        <v-expansion-panel v-for="(pregunta,i) in preguntas" :key="i">
          <v-expansion-panel-header>
            <span class="pregunta">{{pregunta.pregunta}}</span>            
          </v-expansion-panel-header>
          <v-expansion-panel-content>{{pregunta.respuesta}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PreguntasFrecuentes",
  data: () => ({
    panel: [0, 1],
    preguntas: [
      {
        pregunta: "¿Qué es NOTERAJESMX?",
        respuesta:
          "Es un proyecto donde colaboran varios profesionales que contribuyen conectando a los emprendedores, para que puedan ofrecer sus productos y/o servicios, con la firme creencia que si ¡jalamos juntos! lograremos activar la economía local."
      },
      {
        pregunta: "¿Cómo puedo aparecer en NOTERAJESMX?",
        respuesta:
          "Puedes hacerlo registrando tu negocio en la página, por el momento estamos trabajando en esa funcionalidad. Si te interesa registrar tu negocio, contáctanos!"
      },
      {
        pregunta: "¿Tiene algún costo registrar mi negocio?",
        respuesta: "No, es completamente gratis!"
      },
      {
        pregunta: "¿Qué tipo de negocio se puede registrar?",
        respuesta:
          "Cualquier tipo de negocio que desee ofrecer productos y/o servicios legales dentro de territorio nacional Mexicano."
      },
      {
        pregunta: "¿Cómo los contacto?",
        respuesta: "A través de nuestras redes sociales."
      }
    ]
  })
};
</script>

<style lang="css" scoped>
.icono {
  color: #71009f !important;
}

.sponsor-title {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.pregunta {
    font-weight: 500;
}
</style>