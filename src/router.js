import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";

import Home from "./views/Home.vue";
import Recipes from "./views/Recipes.vue";
import AddRecipe from "./views/AddRecipe.vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/recipes",
			name: "recipes",
			component: Recipes
		},
		{
			path: "/addrecipe",
			name: "addrecipe",
			component: AddRecipe
		}
	]
});
