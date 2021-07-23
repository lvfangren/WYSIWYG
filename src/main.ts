import Vue from 'vue';
import App from './App1.vue';
import './css/test.css';
import Test from './test';
import { httpAxios } from './share/index';
console.log(Test);

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
