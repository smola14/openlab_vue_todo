import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BuLMA from 'bulma'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BuLMA)

app.mount('#app')
