import Vue from 'vue';
import {Button, LoadingBar, Modal, Row, Col} from 'iview';
import 'iview/dist/styles/iview.css';

Vue.component('Button', Button);
Vue.component('LoadingBar', LoadingBar);
Vue.component('Modal', Modal);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.prototype.$Modal = Modal;