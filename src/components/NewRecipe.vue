<template>
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
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'newRecipe',

    
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

}
</script>

<style>

</style>