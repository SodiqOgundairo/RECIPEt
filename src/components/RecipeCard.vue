<template>
  <div class="col-md-4" v-for="recipe in recipeState"
      :key="recipe.slug">
    <div
      class="card shadow-lg theme m-2"
     
    >
      <p class="h5 card-header fw-bold">
        {{ recipe.title }}
      </p>
      <div class="card-body">
        <p class="fst-italic">{{ recipe.description }}</p>
        <router-link
          :to="`/recipe/${recipe.slug}`"
          class="btn bg-theme text-white shadow-none"
        >
          View Recipe
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecipeCard",

  computed: mapGetters({
    recipeState: "getRecipeState",
  }),
};
</script>

<style></style>
