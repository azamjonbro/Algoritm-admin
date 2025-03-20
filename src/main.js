import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import "./assets/CSS/style.css"

createApp(App)
.use(router)
.mount('#app')
