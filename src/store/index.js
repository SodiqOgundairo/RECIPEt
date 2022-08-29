import { createStore } from "vuex"
import recipesModule from "./modules/recipes.module"

const store = createStore({
    state: {
        recipesState: recipesModule.state
    },
    getters: {
        getRecipeState(state) {
            return state.recipesState.recipes
        }
    },
    mutations: {},
    actions: {},
    modules: {
        recipesModule,
    },
})

export default store