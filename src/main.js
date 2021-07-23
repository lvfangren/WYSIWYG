import Vue from 'vue';
import App from './App.vue';
import './css/test.css';
import Test from './test.ts';
console.log(Test);
const aaa = new Vue({
    el: '#app',
    components: {
        App,
    },
    template: '<App/>',
});
