import { createApp } from 'vue';
import App from './App.vue';
import './css/normalize.less';
import TestPlugin from './plugins/testPlu/main';
// import { httpAxios } from './share/index';

// Vue.prototype.$http = httpAxios;
// declare module '@vue/runtime-core' {
//     // eslint-disable-next-line
//     interface ComponentCustomProperties {
//       $lfr: any
//     }
// }

// createApp(App).mount('#app');
createApp(App).use(TestPlugin).mount('#app');
