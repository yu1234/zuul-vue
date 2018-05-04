import Vue from 'vue';
import {LoadingBar} from 'iview';
import VueRouter from 'vue-router';
import Util from './libs/util';

Vue.use(VueRouter);
const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/setting',
    meta: {
        title: 'setting'
    },
    component: (resolve) => require(['./views/setting/setting.vue'], resolve)
}];

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
    LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    LoadingBar.finish();
    window.scrollTo(0, 0);
});
export default router;