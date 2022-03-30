import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './firebase'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
