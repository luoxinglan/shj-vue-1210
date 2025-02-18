import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import App from './App.vue'
import router from './router'
import store from './store'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
import echarts from "@/echarts/myEcharts"
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
