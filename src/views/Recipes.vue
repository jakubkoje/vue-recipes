<template>
  <div>
    <Header />
    <Search @search="searchRecipes" />
    <Results />
  </div>
</template>

<script>
import Header from "../components/Header";
import Search from "../components/Recipes/Search";
import Results from "../components/Recipes/Results";
import Axios from "axios";

export default {
  name: "recipes",
  components: {
    Header,
    Search,
    Results
  },
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    searchRecipes(arr) {
      Axios.get(
        "https://www.food2fork.com/api/search?key=MYKEY&q=chicken%20breast"
      ).then(res => {
        this.recipes = res.data.recipes;
        console.log(this.recipes);
      });
    }
  }
};
</script>

<style scoped>
</style>
