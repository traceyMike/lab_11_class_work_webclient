import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

// createApp(App).mount('#app') // create app then show in browser

const app = createApp(App) // create app
// configure app with store
const piniaStore = createPinia()
app.use(piniaStore)
// show in broswer in the div with id = 'app'
app.mount('#app')
