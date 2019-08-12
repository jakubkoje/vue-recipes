<template>
  <div>
    <Header />
    <ion-item class="ion-margin">
      <ion-label position="stacked">Recipe name</ion-label>
      <ion-input class="background" placeholder="Enter Input"></ion-input>
    </ion-item>

    <ion-item class="ion-margin">
      <ion-label position="stacked">Description</ion-label>
      <ion-textarea
        rows="4"
        class="background"
        placeholder="Write instructions for your recipe here"
      ></ion-textarea>
    </ion-item>
  </div>
</template>

<script>
import Header from "../components/Home/Header";
export default {
  name: "addrecipe",
  components: {
    Header
  }
};
</script>

<style scoped>
.background {
  background-color: #f4f5f8;
}
</style>
