import { createApp } from 'vue'
import router  from './router'
import App from './App.vue'

// 引入公共css]
import './assets/css/common.css'
// 引入阿里图标
import './assets/fonts/iconfont.css'
// 引入element
import installElementPlus from "./plugins/element"

// 引入vuex
import store from "./store/index.js"

const app = createApp(App)
installElementPlus(app)
app.use(store)
app.use(router)
app.mount('#app')
