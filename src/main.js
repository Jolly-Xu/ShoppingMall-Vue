import { createApp } from 'vue'
import router  from './router'
import App from './App.vue'

// 引入公共css]
import './assets/css/common.css'
// 引入阿里图标
import './assets/fonts/iconfont.css'
// 引入element
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import installElementPlus from "./plugins/element"
const app = createApp(App)
installElementPlus(app)
app.use(router)
app.mount('#app')
