<template>
      <ion-content>
          <ion-list>
          <ion-item class="ion-margin">
            <ion-label position="stacked">Write in your available ingredients</ion-label>
            <ion-input class="background" placeholder="dfsf"></ion-input>
            <ion-button size="small" shape="round">+</ion-button>
          </ion-item>
          </ion-list>
      </ion-content>
</template>

<script>
export default {
    name: "Results"
}
</script>

<style scoped>
.background {
  background-color: #f4f5f8;
}
</style>