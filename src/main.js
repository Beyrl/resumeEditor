import Vue from 'vue'
import App from './App'
import './assets/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);


new Vue({
    el:'#app',
    template:'<App/>',
    components:{App}
})