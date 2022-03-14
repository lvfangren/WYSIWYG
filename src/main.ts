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
localStorage.setItem('name', '1');
sessionStorage.setItem('age', '21');
window.onload = () => {
    $appVueInstance.$mount('#app');
};
