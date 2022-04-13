import { App } from 'vue';
import Test from './tabbar.vue';
export default {
    install(app: App, options: any) {
        app.component('test-tab', Test);

        // app.component('test-tab', Test);
        console.log(app, options);
    },
};
