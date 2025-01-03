import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'normalize.css'
// import '@yike-design/ui/es/index.less'
import './assets/style/basic.less'
import './style.less'
const app = createApp(App)
app.use(router)
app.mount('#app')
