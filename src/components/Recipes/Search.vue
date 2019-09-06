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
      <ion-item v-for="ingredient in ingredients" :key="ingredient">
        <ion-label>{{ingredient}}</ion-label>
        <ion-button color="danger" shape="round" @click="removeIngredient(ingredient)">X</ion-button>
      </ion-item>
    </ion-list>
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
      this.$emit("search", this.ingredients);
    },
    removeIngredient(ingredient) {
      this.ingredients = this.ingredients.filter(e => e !== ingredient);
      this.$emit("search", this.ingredients);
    }
  }
};
</script>

<style scoped>
.background {
  background-color: #f4f5f8;
}
</style>