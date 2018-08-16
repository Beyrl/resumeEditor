import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import './assets/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
    el:'#app',
    template:'<App/>',
    components:{App}
})