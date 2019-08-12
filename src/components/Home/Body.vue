<template>
  <ion-grid>
    <ion-row>
      <ion-col class="ion-margin-horizontal">
        <ion-text color="dark">
          <h3>You don't know what to cook today?</h3>
        </ion-text>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="ion-margin-horizontal">
        <ion-text color="primary">
          <h1>Don't worry. We know for you!</h1>
        </ion-text>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="ion-margin-horizontal">
        <ion-text color="dark">
          <h4>Just tell us your available ingredients and we'll find recipes that you can cook right now.</h4>
        </ion-text>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="ion-margin-horizontal">
        <router-link to="/recipes">
          <ion-button expand="block">Let's find out</ion-button>
        </router-link>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
  name: "Body"
};
</script>

<style>
</style>
