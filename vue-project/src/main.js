
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao('1892421321018e86f01a44ca5b852b91');

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
