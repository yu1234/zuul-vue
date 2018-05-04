import Vue from 'vue';
import './iview';
import router from './router';
import App from './app.vue';

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});