
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios';
// import userStore from '@/stores/useUserStore'

axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.withCredentials = true;

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')

