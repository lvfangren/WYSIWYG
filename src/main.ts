import 'normalize.css/normalize.css';
import Vue from 'vue';
import App from './App.vue';
import './css/test.css';
import { httpAxios } from './share/index';
// if (1) {
//     let x = document.createElement('script');
//     x.src = 'https://cdn.bootcdn.net/ajax/libs/vConsole/3.9.1/vconsole.min.js';
//     document.head.appendChild(x);
//     // eslint-disable-next-line
//     // tslint:disable-next-line
//     new VConsole()
// }

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
