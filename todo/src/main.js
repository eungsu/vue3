import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import moment from 'moment/dist/moment.js'

const app = createApp(App)
app.provide('today', moment().format('YYYY-MM-DD'))
app.mount('#app')
