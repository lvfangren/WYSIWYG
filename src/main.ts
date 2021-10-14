import 'normalize.css/normalize.css';
import Vue from 'vue';
import App from './App.vue';
import './css/test.css';
import Test from './test';
import { httpAxios } from './share/index';
console.log(Test);

Vue.prototype.$http = httpAxios;

const $appVueInstance = new Vue({
    // components: {
    //     App,
    // },
    // template: '<App/>',
    el: '#app',
    render: h => h(App),
});

window.onload = () => {
    $appVueInstance.$mount('#app');
};
