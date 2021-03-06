import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'

import './main.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
