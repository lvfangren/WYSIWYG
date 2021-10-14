import 'normalize.css/normalize.css';
import Vue from 'vue';
import App from './App.vue';
import './css/test.css';
import { httpAxios } from './share/index';

Vue.prototype.$http = httpAxios;

const $appVueInstance = new Vue({
    components: {
        App,
    },
    template: '<App/>',
});

window.onload = () => {
    $appVueInstance.$mount('#app');
};
