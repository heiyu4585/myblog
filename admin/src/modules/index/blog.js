import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);

import Vuex from 'vuex'
Vue.use(Vuex);

import routes from "./router";

// 3. 创建 router 实例，然后传 routes 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    data: {
        message : "xuxiao is boy"
    },
    render: h => h(App)
});

