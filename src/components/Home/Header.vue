<template>
  <ion-header>
    <ion-toolbar color="dark">
      <ion-buttons slot="secondary">
        <router-link to="/">
          <ion-button>
            <ion-icon name="home"></ion-icon>
          </ion-button>
        </router-link>
      </ion-buttons>
      <ion-buttons slot="primary">
        <router-link to="/search">
          <ion-button>
            <ion-icon name="nutrition"></ion-icon>
          </ion-button>
        </router-link>
      </ion-buttons>
      <ion-title>Recipes</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
a {
  color: white;
}
</style>
