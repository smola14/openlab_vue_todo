import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BuLMA from 'bulma'
import 'boxicons'
import w from '@/w/w'
import mocks from '@/w/moxios'
const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(BuLMA)
  .use(w)
  .use(mocks, {
    routes: {
      'GET todos': true,
      'POST todos': true,
    },
  })

app.mount('#app')
