<template>
  <div>
    <Header />
    <Body />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Home/Header";
import Body from "../components/Home/Body";

export default {
  name: "home",
  components: { Header, Body }
};
</script>
