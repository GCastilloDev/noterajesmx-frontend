<template>
  <v-container class="black">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="d-flex justify-center">
        <!-- DATOS DEL DUEÑO DEL NEGOCIO -->
        <v-col cols="10">
          <v-card class="card">
            <v-row>
              <v-col cols="12">
                <h2 class="text-center">Datos personales</h2>
                <p>{{formulario.datosPersonales}}</p>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  solo
                  v-model="formulario.datosPersonales.nombre"
                  :rules="nombreRules"
                  label="Nombre(s)"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="7">
                <v-text-field
                  solo
                  v-model="formulario.datosPersonales.apellidos"
                  :rules="apellidosRules"
                  label="Apellidos"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="2">
                <v-select
                  solo
                  v-model="formulario.datosPersonales.sexo"
                  :items="sexo"
                  :rules="[v => !!v || 'El campo es requerido']"
                  label="Sexo"
                  required
                ></v-select>
              </v-col>

              <v-col cols="5">
                <v-text-field
                  solo
                  v-model="formulario.datosPersonales.correo"
                  :rules="correoRules"
                  label="Correo"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="5">
                <v-text-field
                  solo
                  v-model="correoConfirmacion"
                  :rules="correoConfirmacionRules"
                  label="Confirmar correo"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  solo
                  v-model="formulario.datosPersonales.contraseña"
                  :rules="contraseñaRules"
                  label="Contraseña"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  solo
                  v-model="contraseñaConfirmacion"
                  :rules="contraseñaConfirmacionRules"
                  label="Confirmar contraseña"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  solo
                  v-model="formulario.datosPersonales.telefonoCelular"
                  :rules="telefonoRules"
                  label="Télefono celular"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="8">
                <v-switch
                  color="#24cc89"
                  v-model="formulario.datosPersonales.whatsApp"
                  label="¿El número cuenta con WhatsApp?"
                ></v-switch>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- DATOS DEL NEGOCIO -->
        <v-col cols="10">
          <v-card class="card">
            <v-row>
              <v-col cols="12">
                <h2 class="text-center">Datos comerciales</h2>
                <p>{{formulario.datosComerciales}}</p>
                <p>{{mismoNumero}}</p>
              </v-col>

              <!-- NOMBRE COMERCIAL -->
              <v-col cols="4">
                <v-text-field
                  solo
                  v-model="formulario.datosComerciales.nombreComercial"
                  :counter="30"
                  hint="Máximo 30 carácteres"
                  :rules="nombreComercialRules"
                  label="Nombre comercial"
                  required
                ></v-text-field>
              </v-col>

              <!-- CIUDAD -->
              <v-col cols="4">
                <v-select
                  solo
                  loading
                  disabled
                  color="#24cc89"
                  hint="Cargando ciudades"
                  persistent-hint
                  v-model="formulario.datosComerciales.ciudad"
                  :items="ciudades"
                  :rules="[v => !!v || 'Campo requerido']"
                  label="Ciudad"
                  required
                ></v-select>
              </v-col>

              <v-col cols="4">
                <v-select
                  solo
                  loading
                  disabled
                  color="#24cc89"
                  hint="Cargando colonias"
                  persistent-hint
                  v-model="formulario.datosComerciales.colonia"
                  :items="colonias"
                  :rules="[v => !!v || 'Campo requerido']"
                  label="Colonia"
                  required
                ></v-select>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  solo
                  v-model="formulario.datosComerciales.telefonoCelular"
                  :rules="telefonoRules"
                  label="Télefono celular"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-switch
                  @change="copiarTelefono"
                  color="#24cc89"
                  v-model="mismoNumero"
                  label="¿Ocupar número personal?"
                ></v-switch>
              </v-col>

              <v-col cols="4">
                <v-switch
                  color="#24cc89"
                  v-model="formulario.datosComerciales.whatsApp"
                  label="¿El número cuenta con WhatsApp?"
                ></v-switch>
              </v-col>

              <v-col cols="12">
                <v-alert
                  dense
                  color="morado"
                  colored-border
                  border="left"
                  icon="mdi-information"
                  elevation="2"
                >
                  <h3>Categorías</h3>
                  <p>Favor de seleccionar cuando menos 1 categoría o máximo 3 con las cuales se identifique su negocio y/o servicio.</p>
                </v-alert>
              </v-col>

              <v-col v-for="(categoria, index) in categorias" :key="index" cols="3" class="d-flex">
                <v-switch
                  dense
                  color="verde"
                  v-model="formulario.datosComerciales.categorias"
                  :rules="categoriaRules"
                  :value="categoria.id"
                  :label="categoria.name"
                  :disabled="formulario.datosComerciales.categorias.length > 2 && formulario.datosComerciales.categorias.indexOf(categoria.id) === -1"
                ></v-switch>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  required
                  solo
                  color="#24cc89"
                  counter
                  label="Agregar una breve descripción de su negocio para que el usuario pueda verla."
                  :rules="descripcionRules"
                  v-model="formulario.datosComerciales.descripcion"
                ></v-textarea>
              </v-col>

              <v-col cols="6">
                <!-- <input type="file" @change="buscarImagen($event)"> -->
                <v-file-input
                  solo
                  color="#24cc89"
                  prepend-icon="mdi-camera"
                  accept="image/*"
                  label="Foto de perfil"
                  v-model="imagen"
                  @change="buscarImagen()"
                ></v-file-input>
              </v-col>

              <v-col cols="6" class="d-flex justify-center">
                <v-avatar v-if="imagenTemporal != ''">
                  <img :src="imagenTemporal" alt="John" />
                </v-avatar>
              </v-col>

              <v-col cols="12">
                <v-switch
                  color="#24cc89"
                  v-model="formulario.datosComerciales.servicioDomicilio"
                  label="¿Cuenta con servicio a domicilio?"
                ></v-switch>
              </v-col>

              <!-- INCIO DE MEDIOS DE PAGO -->
              <v-col cols="12">
                <v-switch
                  color="#24cc89"
                  v-model="mostrarMediosPago"
                  label="Especificar medios de pago"
                ></v-switch>
              </v-col>

              <v-col cols="2" class="d-flex justify-center" v-if="mostrarMediosPago">
                <v-switch
                  color="#24cc89"
                  v-model="formulario.datosComerciales.mediosDePago.efectivo"
                  label="Efectivo"
                ></v-switch>
              </v-col>
              <v-col cols="2" class="d-flex justify-center" v-if="mostrarMediosPago">
                <v-switch
                  color="#24cc89"
                  v-model="formulario.datosComerciales.mediosDePago.transferencia"
                  label="Transferencia"
                ></v-switch>
              </v-col>
              <v-col cols="3" class="d-flex justify-center" v-if="mostrarMediosPago">
                <v-switch
                  color="#24cc89"
                  v-model="formulario.datosComerciales.mediosDePago.tarjetaLocal"
                  label="Tarjeta en el local"
                ></v-switch>
              </v-col>
              <v-col cols="5" class="d-flex justify-center" v-if="mostrarMediosPago">
                <v-switch
                  v-if="mostrarMediosPago"
                  color="#24cc89"
                  v-model="formulario.datosComerciales.mediosDePago.tarjetaContraEntrega"
                  label="Tarjeta contra entrega(servicio a domicilio)"
                ></v-switch>
              </v-col>

              <v-col cols="12">
                <v-alert
                  dense
                  color="morado"
                  colored-border
                  border="left"
                  icon="mdi-information"
                  elevation="2"
                >
                  <h3>Redes sociales</h3>
                  <p>
                    Los links de redes sociales servirán para poder brindarle esa información a los futuros compradores, con la finalidad de redirigirlos y generar tráfico a sus redes sociales.
                    <strong>Es importante que el link sea puesto de forma correcta para que funcione, ejemplo: https://www.facebook.com/noterajesmxoficial/</strong>
                  </p>
                </v-alert>
              </v-col>

              <v-col cols="6">
                <v-switch
                  color="#24cc89"
                  v-model="mostrarFacebook"
                  label="Agregar link de Facebook"
                ></v-switch>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-if="mostrarFacebook"
                  solo
                  v-model="formulario.datosComerciales.redesSociales.facebook"
                  label="Link de Facebook"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-switch
                  color="#24cc89"
                  v-model="mostrarInstagram"
                  label="Agregar link de Instagram"
                ></v-switch>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-if="mostrarInstagram"
                  solo
                  v-model="formulario.datosComerciales.redesSociales.instagram"
                  label="Link de Instagram"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-switch color="#24cc89" v-model="mostrarTwitter" label="Agregar link de Twitter"></v-switch>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-if="mostrarTwitter"
                  solo
                  v-model="formulario.datosComerciales.redesSociales.twitter"
                  label="Link de Twitter"
                  required
                ></v-text-field>
              </v-col>

              <!-- INCIO DE AGREGAR HORARIO -->
              <v-col cols="12">
                <v-switch color="#24cc89" v-model="agregarHorario" label="Especificar horario"></v-switch>
              </v-col>
              {{dias}}
              <v-col v-show="agregarHorario" cols="12" v-for="dia in dias" :key="dia.dia">
                <v-row>
                  <v-col cols="2">
                    <v-switch color="#24cc89" v-model="dia.abierto" :label="dia.dia"></v-switch>
                  </v-col>
                  <v-col cols="4">
                    <v-select
                      v-model="dia.horarioApertura"
                      :items="horario"
                      :rules="dia.abierto ? [v => !!v || 'Campo requerido'] : ''"
                      label="Horario apertura"
                      :required="!dia.abierto"
                      :disabled="!dia.abierto"
                    ></v-select>
                  </v-col>
                  <v-col cols="4">
                    <v-select
                      v-model="dia.horarioCierre"
                      :items="horario"
                      :rules="dia.abierto ? [v => !!v || 'Campo requerido'] : ''"
                      label="Horario cierre"
                      :required="!dia.abierto"
                      :disabled="!dia.abierto"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-col>

              <!-- FIN DE AGREGAR HORARIO -->
            </v-row>
          </v-card>
        </v-col>

        <v-col>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

          <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

          <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "FormularioNegocio",
  data: () => ({
    imagen: null,
    imagenTemporal: "",
    mostrarMediosPago: false,
    mostrarFacebook: false,
    mostrarInstagram: false,
    mostrarTwitter: false,
    ciudades: [],
    colonias: [],
    sexo: ["Femenino", "Masculino"],
    formulario: {
      datosPersonales: {
        nombre: "",
        apellidos: "",
        sexo: "",
        correo: "",
        contraseña: "",
        telefonoCelular: "",
        whatsApp: false
      },
      datosComerciales: {
        nombreComercial: "",
        ciudad: "",
        colonia: "",
        telefonoCelular: "",
        whatsApp: "",
        categorias: [],
        descripcion: "",
        fotoPerfil: "",
        servicioDomicilio: false,
        mediosDePago: {
          efectivo: false,
          transferencia: false,
          tarjetaLocal: false,
          tarjetaContraEntrega: false
        },
        redesSociales: {
          facebook: "",
          instagram: "",
          twitter: ""
        },
        horario: {
          lunes: {
            cerrado: "",
            horarioApertura: "",
            horarioCierre: ""
          },
          martes: {
            cerrado: "",
            horarioApertura: "",
            horarioCierre: ""
          },
          miercoles: {
            cerrado: "",
            horarioApertura: "",
            horarioCierre: ""
          },
          jueves: {
            cerrado: "",
            horarioApertura: "",
            horarioCierre: ""
          },
          viernes: {
            cerrado: "",
            horarioApertura: "",
            horarioCierre: ""
          },
          sabado: {
            cerrado: "",
            horarioApertura: "",
            horarioCierre: ""
          },
          domingo: {
            cerrado: "",
            horarioApertura: "",
            horarioCierre: ""
          }
        }
      }
    },
    agregarHorario: false,
    horario: [
      "01:00 hrs.",
      "02:00 hrs.",
      "03:00 hrs.",
      "04:00 hrs.",
      "05:00 hrs.",
      "06:00 hrs.",
      "07:00 hrs.",
      "08:00 hrs.",
      "09:00 hrs.",
      "10:00 hrs.",
      "11:00 hrs.",
      "12:00 hrs.",
      "13:00 hrs.",
      "14:00 hrs.",
      "15:00 hrs.",
      "16:00 hrs.",
      "17:00 hrs.",
      "18:00 hrs.",
      "19:00 hrs.",
      "20:00 hrs.",
      "21:00 hrs.",
      "22:00 hrs.",
      "23:00 hrs.",
      "24:00 hrs."
    ],
    dias: [
      {
        dia: "Lunes",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Martes",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Miércoles",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Jueves",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Viernes",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Sábado",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      },
      {
        dia: "Domingo",
        abierto: false,
        horarioApertura: "",
        horarioCierre: ""
      }
    ],
    mismoNumero: false,
    correoConfirmacion: "",
    contraseñaConfirmacion: "",
    valid: true,
    rules: [v => v.length <= 25 || "Max 25 characters"],
    value: "",
    nombreRules: [
      v => !!v || "El nombre es requerido",
      v => (v && v.length >= 3) || "El nombre debe contener mas de 3 carácteres"
    ],
    apellidosRules: [
      v => !!v || "Los apellidos son requeridos",
      v =>
        (v && v.length >= 3) || "El apellido debe contener mas de 3 carácteres"
    ],
    correoRules: [
      v => !!v || "El correo es requerido",
      v => /.+@.+\..+/.test(v) || "Formato de correo no válido"
    ],
    contraseñaRules: [
      v => !!v || "La contraseña es requerida",
      v =>
        (v && v.length > 6) || "La contraseña debe contener mas de 6 carácteres"
    ],
    telefonoRules: [
      v => !!v || "El teléfono es requerido",
      v => (v && v.length == 10) || "El teléfono debe de tener 10 dígitos"
    ],
    nombreComercialRules: [
      v => !!v || "El nombre comercial es requerido",
      v => (v && v.length < 31) || "Solo se permiten 30 carácteres"
    ],
    descripcionRules: [
      v => !!v || "La descripción es requerida",
      v => (v && v.length < 257) || "Solo se permiten 256 carácteres"
    ]
  }),

  methods: {
    ...mapActions(["getCategorias"]),
    async buscarImagen() {
      if (this.imagen === undefined || this.imagen === "") {
        this.imagenTemporal = "";
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(this.imagen);
        reader.onload = e => {
          this.imagenTemporal = e.target.result;
          //console.log(this.imagenTemporal);
        };
      }
    },
    async subirImagen() {
      try {
        const refImagen = firebase
          .storage()
          .ref()
          .child("prueba");
        const res = await refImagen.put(this.imagen);
        console.log(res);
        const url = await refImagen.getDownloadURL();
        this.formulario.datosComerciales.fotoPerfil = url;
        console.log(url);
      } catch (error) {
        console.log(error);
      }
    },
    async comprobarCategorias() {
      if (this.categorias === "") {
        await this.getCategorias();
      }
    },
    async validate() {
      if (this.$refs.form.validate()) {
        console.log("ERROOOOOOR")
      } else {       
        let aux = [];
        this.dias.forEach(element => {
          let dia = {
            abierto: element.abierto,
            horarioApertura: element.horarioApertura,
            horarioCierre: element.horarioCierre
          }
          aux.push(dia)
        });

        this.formulario.datosComerciales.horario.lunes = aux[0];
        this.formulario.datosComerciales.horario.martes = aux[1];
        this.formulario.datosComerciales.horario.miercoles = aux[2];
        this.formulario.datosComerciales.horario.jueves = aux[3];
        this.formulario.datosComerciales.horario.viernes = aux[4];
        this.formulario.datosComerciales.horario.sabado = aux[5];
        this.formulario.datosComerciales.horario.domingo = aux[6];

        await this.subirImagen();
        
        console.log(this.formulario);
        console.log(JSON.stringify(this.formulario));
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    copiarTelefono() {
      if (this.mismoNumero) {
        this.formulario.datosComerciales.telefonoCelular = this.formulario.datosPersonales.telefonoCelular;
        this.formulario.datosComerciales.whatsApp = this.formulario.datosPersonales.whatsApp;
      }
    }
  },
  computed: {
    ...mapState(["categorias"]),
    correoConfirmacionRules() {
      return [
        () =>
          this.formulario.datosPersonales.correo === this.correoConfirmacion ||
          "Los correo no son iguales",
        v => !!v || "Confirmación de correo es requerida"
      ];
    },
    contraseñaConfirmacionRules() {
      return [
        () =>
          this.formulario.datosPersonales.contraseña ===
            this.contraseñaConfirmacion || "Las contraseñas no son iguales",
        v => !!v || "Confirmación de la contraseña es requerida"
      ];
    },
    categoriaRules() {
      return [
        () =>
          this.formulario.datosComerciales.categorias.length > 0 ||
          "Debe seleccionar al menos una categoria"
      ];
    }
  },
  watch: {
    mostrarFacebook: function() {
      if (this.mostrarFacebook == false)
        this.formulario.datosComerciales.redesSociales.facebook = false;
      if (this.mostrarFacebook == true)
        this.formulario.datosComerciales.redesSociales.facebook = "";
    },
    mostrarInstagram: function() {
      if (this.mostrarInstagram == false)
        this.formulario.datosComerciales.redesSociales.instagram = false;
      if (this.mostrarInstagram == true)
        this.formulario.datosComerciales.redesSociales.instagram = "";
    },
    mostrarTwitter: function() {
      if (this.mostrarTwitter == false)
        this.formulario.datosComerciales.redesSociales.twitter = false;
      if (this.mostrarTwitter == true)
        this.formulario.datosComerciales.redesSociales.twitter = "";
    }
  },
  created() {
    this.comprobarCategorias();
  }
};
</script>

<style lang="css" scoped>
.imagenAvatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.card {
  padding: 2rem;
}
</style>