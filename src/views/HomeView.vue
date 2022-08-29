<template>
  <div class="home">
    <p class="h1 fw-bolder text-muted text-center">MY RECIPES</p>
    <div class="text-center my-2">
      <button
        @click.prevent="togglePopup"
        v-if="!popupOpen"
        class="btn btn-light shadow-none align-center"
      >
        Add New Recipe
      </button>
    </div>


<div class="row" v-if="!popupOpen" >
    <div class="col-md-3 m-auto"  v-for="recipe in recipeState"
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
</div>

    <div class="col" v-if="popupOpen">
      <div class="row">
        <div class="m-auto col-md-5">
          <div class="card theme shadow-lg">
            <div class="card-header">
              <p class="h4 fw-bolder">Add new Recipe</p>
            </div>

            <form @submit.prevent="addNewRecipe">
              <div class="card-body overflow-scroll height-reduced">
                <div class="mb-3">
                  <label class="form-label text-end">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="newRecipe.title"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label text-end">Description</label>
                  <textarea
                    class="form-control"
                    rows="2"
                    v-model="newRecipe.description"
                  ></textarea>
                </div>

                <div class="mb-3">
                  <label class="form-label text-end">Ingredients</label>
                  <div v-for="i in newRecipe.ingredientRows" :key="i">
                    <input
                      class="form-control my-2"
                      type="text"
                      v-model="newRecipe.ingredients[i - 1]"
                    />
                  </div>
                  <button
                    class="btn btn-dark btn-sm mt-1"
                    type="button"
                    @click="addNewIngredient"
                  >
                    Add Ingredient
                  </button>
                </div>

                <div class="mb-3">
                  <label class="form-label text-end">Method</label>
                  <div v-for="i in newRecipe.methodRows" :key="i">
                    <textarea
                      class="form-control my-2"
                      rows="2"
                      v-model="newRecipe.method[i - 1]"
                    ></textarea>
                  </div>
                  <button
                    class="btn btn-dark btn-sm mt-1"
                    type="button"
                    @click="addNewStep"
                  >
                    Add Step
                  </button>
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-dark mt-1" type="submit">
                  ADD RECIPE
                </button>
                &nbsp;

                <button
                  @click.prevent="togglePopup"
                  class="btn btn-danger mt-1"
                  type="button"
                >
                  CLOSE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { mapGetters, useStore } from "vuex";
export default {
  name: "HomeView",

  components: {},

  setup() {
    const newRecipe = ref({
      title: "",
      description: "",
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1,
    });
    // console.log(newRecipe.title)

    const popupOpen = ref(false);

    const store = useStore()

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    };

    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    };

    const addNewStep = () => {
      newRecipe.value.methodRows++;
    };

    const addNewRecipe = () => {
      newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g, "-");

      if (newRecipe.value.slug === "") {
        alert("Please enter a new title!");
        return;
      }

      store.commit('recipesModule/ADD_RECIPE', {...newRecipe.value });

      newRecipe.value={
      title: "",
      description: "",
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1,
    };

      togglePopup()
    };

    return {
      newRecipe,
      togglePopup,
      popupOpen,
      addNewStep,
      addNewIngredient,
      addNewRecipe,
    };
  },

  computed: mapGetters({
    recipeState: "getRecipeState",
  }),
};
</script>

<style scoped>
.home {
  padding: 1rem;
  align-items: center;
}

input,
textarea {
  resize: none;
}

.height-reduced {
  height: 450px;
  overflow-x: hidden !important;
}
</style>
