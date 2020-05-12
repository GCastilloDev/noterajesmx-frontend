<template>
  <v-row>
    <v-col cols="6">
      <h2>Información general del negocio</h2>
    </v-col>
    <v-col cols="6" class="d-flex justify-end" v-if="lectura">
      <v-btn outlined color="verde" @click="editar = true" :disabled="editar" class="btn-editar">
        <v-icon left>mdi-file-document-edit-outline</v-icon>Editar
      </v-btn>
      <v-btn color="verde" :disabled="!editar" :dark="editar" @click="actualizar" depressed>
        <v-icon left>mdi-content-save</v-icon>Guardar cambios
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" class="d-flex justify-center" v-if="imagenUrl == ''">
            <v-img class="imagen" src="https://firebasestorage.googleapis.com/v0/b/no-te-rajes-mx.appspot.com/o/images%2Ffoto-perfil.png?alt=media&token=dc412219-f809-4a86-b9c9-1a7a8b6a27e2" :max-width="'500px'"></v-img>
          </v-col>
          <v-col cols="12" class="d-flex justify-center" v-if="imagenUrl != ''">
            <v-avatar size="300" class="avatar-border">
              <v-img :src="imagenUrl" max-height="500" contain></v-img>
            </v-avatar>
          </v-col>
          <v-row class="d-flex justify-center">
            <v-col cols="6">
              <v-btn
                :disabled="!editar"
                class
                block
                color="purple lighten-1"
                :dark="editar"
                large
                elevation="0"
                @click="$refs.boton.click()"
              >
                <v-icon left>mdi-camera</v-icon>Subir foto de perfil
              </v-btn>
            </v-col>
          </v-row>
          <v-col cols="12">
            <input
              type="file"
              accept="image/*"
              ref="boton"
              class="d-none"
              @change="cargarImagen($event)"
            />
          </v-col>
        </v-row>
      </v-form>
      <v-col cols="12" class="d-flex justify-end btn" v-if="! lectura">
        <v-btn color="verde" dark large elevation="0" @click="siguiente" block>Continuar</v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import firebase from "firebase/app";
import "firebase/storage";

import { mapState, mapMutations } from "vuex";

export default {
  name: "FotoPerfil",
  data: () => ({
    data: {
      fotoPerfil: ""
    },
    editar: false,
    imagen: "",
    imagenUrl: "",
    valid: true
  }),
  props: {
    lectura: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    ...mapMutations(["cambiarFotoPerfil"]),
    async cargarImagen(event) {
      this.imagen = event.target.files[0];
      const reader = new FileReader();
      await reader.readAsDataURL(this.imagen);
      reader.onload = e => {
        this.imagenUrl = e.target.result;
      };
    },
    async subirImagen() {
      this.$emit("activarLoading", true);
      let mensaje = {
        mostrar: true
      };
      try {
        const refImagen = firebase
          .storage()
          .ref()
          .child(this.token)
          .child("fotoPerfil");
        const res = await refImagen.put(this.imagen);
     
        const url = await refImagen.getDownloadURL();
        this.data.fotoPerfil = url;
       
        const config = {
          headers: {
            "X-CSRF-Token": this.token,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        };
        const response = await axios.post(
          "http://lucy-coatza.herokuapp.com/store/uploadImage",
          this.data,
          config
        );
        // Cambia la url de la foto de perfil de la store
        this.cambiarFotoPerfil(url);
        
        // Manda los eventos al padre para mostrar el loading
        mensaje.msg = response.data.message;
        this.editar = false;
        this.$emit("activarLoading", false);
        this.$emit("activarMensaje", mensaje);
      } catch (error) {
        mensaje.msg = "Hubo un error al actualizar su información.";
        this.editar = false;
        this.$emit("activarLoading", false);
        this.$emit("activarMensaje", mensaje);
      }
    },
    async siguiente() {
      if (this.$refs.form.validate()) {
        this.subirImagen();
      } else {
        this.$emit("activarLoading", true);
        await setTimeout(() => {
          this.loading = false;
          this.$emit("activarLoading", false);
          this.$emit("siguiente");
        }, 3000);
      }
    },
    async actualizar() {
      this.subirImagen();
    }
  },
  computed: {
    ...mapState(["sesion", "usuario", "token"])
  },
  created() {
    if (this.sesion) this.imagenUrl = this.usuario.fotoPerfil;
  }
};
</script>

<style lang="css" scoped>
.avatar-border {
  border-style: solid !important;
  border-width: 1px !important;
  border-color: gray !important;
}

.imagen {
  opacity: 0.8;
}
</style>