import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";

import Ionic from "@ionic/vue";
import "@ionic/core/css/ionic.bundle.css";
import store from './store'

Vue.use(Ionic);
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
