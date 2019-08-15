<template>
  <ion-header>
    <ion-toolbar color="dark">
      <ion-buttons slot="start">
        <router-link to="/">
          <ion-button>
            <ion-icon name="home"></ion-icon>
          </ion-button>
        </router-link>
      </ion-buttons>
      <ion-buttons slot="primary">
        <router-link to="/addrecipe">
          <ion-button>
            <ion-icon name="add"></ion-icon>
          </ion-button>
        </router-link>
        <router-link to="/recipes">
          <ion-button>
            <ion-icon name="search"></ion-icon>
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
