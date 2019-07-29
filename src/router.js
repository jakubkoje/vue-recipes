import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";

import Home from "./views/Home.vue";
import Search from "./views/Search.vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/search",
			name: "search",
			component: Search
		}
	]
});
