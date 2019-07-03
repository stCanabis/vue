import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/page2',
            component: ()=> import('./components/TestPage.vue'),
        },
        {
            path: '/',
            component: ()=> import('./components/Servers.vue'),
        },
    ]

})