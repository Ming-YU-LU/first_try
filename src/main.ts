import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'

// 导航守卫
import './permission'

// css
import '@/styles/index.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
