import { createApp } from 'vue';
import App from './App.vue';
import './css/normalize.less';
import './css/var.less';
import './css/base.less';
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
// 开发时测试mock用
if (import.meta.env?.VITE_IS_MOCK === 'true') {
    const x = import('./mock/index');
    console.log(x, 'xxx');
}
createApp(App).use(TestPlugin).mount('#app');
