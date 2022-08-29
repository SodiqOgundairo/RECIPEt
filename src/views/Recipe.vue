<template>
  <div class="col mt-5">
    <div class="row">
      <div class="col-md-4 m-auto">
        <router-link to="/" class="text-decoration-none text-light">
          &lt; Back
        </router-link>
        <h2 class="card-title fw-bold text-white mt-3">
          {{ isRecipeState.title }}
        </h2>
        <div class="card shadow-lg height-reduced">
          <div class="card-body bg-opacity-75 theme">
            <!-- <h6 class="card-subtitle mb-2 text-muted">
              {{ $route.params.slug }}
            </h6> -->

            <div class="border-bottom-2 mt-2 p-2">
              <p class="h5 fw-bold">Description</p>
              <p class="card-text">{{ isRecipeState.description }}</p>
            </div>

            <div class="border-3 border-top mt-2 p-2">
              <p class="h5 fw-bold">Ingredients</p>
              <ul class="list-group">
                <li
                  class="list-group-item"
                  v-for="(ingredients, i) in isRecipeState.ingredients"
                  :key="i"
                >
                  {{ ingredients }}
                </li>
              </ul>
            </div>

            <div class="border-3 border-top mt-2 p-2">
              <p class="h5 fw-bold">How to prepare</p>
              <ul class="list-group">
                <li
                  class="list-group-item"
                  v-for="(step, i) in isRecipeState.method"
                  :key="i"
                >
                  <span v-html="cleanText(step)"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "Recipe-vue",

  computed: {
    isRecipeState() {
      return this.$store.getters.getRecipeState.find(
        (recipes) => recipes.slug === this.$route.params.slug
      );
    },
  },

  methods: {
    cleanText(text) {
      return text.replace(/\n/g, "<br/>");
    },
  },
};
</script>

<style>
.height-reduced {
  height: 450px;
  overflow-x: hidden !important;
}
</style>
