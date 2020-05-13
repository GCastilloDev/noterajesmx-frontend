import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase/app'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
    id: 'UA-164669315-1',
    router,
    autoTracking: {
        pageviewTemplate(route) {
            return {
                page: route.path,
                title: document.title,
                location: window.location.href
            }
        },
        screenview: true
    },
    debug: {
        enabled: false
    },
    checkDuplicatedScript: true
})

firebase.initializeApp({
    apiKey: "AIzaSyBN6h8z0HJLepLpOp9Fd19TH6D-LwBRLVo",
    authDomain: "no-te-rajes-mx.firebaseapp.com",
    databaseURL: "https://no-te-rajes-mx.firebaseio.com",
    projectId: "no-te-rajes-mx",
    storageBucket: "no-te-rajes-mx.appspot.com",
    messagingSenderId: "818513018257",
    appId: "1:818513018257:web:b9ba97a5abfd12c1752e30",
    measurementId: "G-HMJKLGGM8R"
})

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

if (sessionStorage.login) {
    console.log(JSON.parse(sessionStorage.login))
    store.dispatch('detectarUsuario', JSON.parse(sessionStorage.login))
}

export const el = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')