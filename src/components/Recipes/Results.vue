<template>
  <ion-content>
    <ion-list>
      <ion-item class="ion-margin">
        <ion-label position="stacked">Write in your available ingredients</ion-label>
        <ion-input
          class="background"
          placeholder="enter ingredient"
          :value="ingredient"
          @ionInput="ingredient = $event.target.value"
          @keydown.enter="addIngredient()"
        ></ion-input>
      </ion-item>
    </ion-list>
    <ion-item v-for="ingredient in ingredients" :key="ingredient">
      <ion-label>{{ingredient}}</ion-label>
    </ion-item>
  </ion-content>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      ingredients: [],
      ingredient: ""
    };
  },
  methods: {
    addIngredient() {
      this.ingredients = [...this.ingredients, this.ingredient];
      this.ingredient = "";
    }
  }
};
</script>

<style scoped>
.background {
  background-color: #f4f5f8;
}
</style>