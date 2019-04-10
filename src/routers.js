//配置路由文件
import Vue from "vue";
import Vuerouter from "vue-router";

Vue.use(Vuerouter);

const routes=[
    {path:'/film',component:()=>import('./views/Films.vue')},
    {path:'/cinemas',component:()=>import('./views/Cinemas.vue')},
    {path:'/center',component:()=>import('./views/Centers.vue')}
];

export default new Vuerouter({
    routes
});