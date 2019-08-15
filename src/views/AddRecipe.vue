<template>
  <ion-content>
    <Header />
    <form @submit="addRecipe">
      <ion-item class="ion-margin">
        <ion-label position="stacked">Recipe name</ion-label>
        <ion-input
          class="background"
          placeholder="Enter Input"
          :value="recipe.name"
          @ionInput="recipe.name = $event.target.value"
        ></ion-input>
      </ion-item>

      <ion-item class="ion-margin">
        <ion-label position="stacked">Description</ion-label>
        <ion-textarea
          rows="4"
          class="background"
          placeholder="Write instructions for your recipe here"
          :value="recipe.description"
          @ionInput="recipe.description = $event.target.value"
        ></ion-textarea>
      </ion-item>

      <ion-list class="ion-margin">
        <ion-item v-for="ingredient in recipe.ingredients" :key="ingredient">
          <ion-label>{{ingredient}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-input
            class="background"
            placeholder="enter ingredient"
            :value="ingredient"
            @ionInput="ingredient = $event.target.value"
          ></ion-input>
          <ion-button v-on:click="addIngredient()">Click me</ion-button>
        </ion-item>
      </ion-list>
      <ion-button expand="block" type="submit">Submit recipe</ion-button>
    </form>
  </ion-content>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "addrecipe",
  components: {
    Header
  },
  data() {
    return {
      recipe: {
        name: "",
        ingredients: ["jablko", "rajcina"],
        description: ""
      },
      ingredient: ""
    };
  },
  methods: {
    addIngredient() {
      this.recipe.ingredients = [...this.recipe.ingredients, this.ingredient];
      this.ingredient = "";
    },
    addRecipe(e) {
      e.preventDefault();
      this.$http.post("", this.recipe);
      console.log(this.recipe);
    }
  }
};
</script>

<style scoped>
.background {
  background-color: #f4f5f8;
}
</style>
