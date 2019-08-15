<template>
  <div>
    <Header />
    <Results/>
    <Search/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Search from "../components/Recipes/Search"
import Results from "../components/Recipes/Results"

export default {
  name: "recipes",
  components: {
    Header,
    Search,
    Results
  }
};
</script>

<style scoped>
</style>
