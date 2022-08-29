export default {
    namespaced: true,
    state: {
        recipes: [
            {
                slug: 'efo-riro',
                title: 'Efo Riro',
                description: 'An african delicacy made with vegetable, chicken, cowskin, and palmoil',
                ingredients: [
                    '1 bundle of vegetable',
                    'Salt, seasonings and spices',
                    '1 onion chopped',
                    'Pepper',
                    'Fish',
                    'Iru Woro',
                    'Palm oil'
                ],
                method: [
                    'Pick the leave off the bundle of vegetables',
                    'Boil the vegeables',
                    'Prepare stew with other ingredients',
                    'Pour the boiled leave inside of the stew',
                    'Allow to cook',
                    'Enjoy with Eba or Semo'
                ],
            },
            {
                slug: 'efo-elegusi',
                title: 'Efo Elegusi',
                description: 'An african delicacy made with vegetable, melon, chicken, cowskin, and palmoil',
                ingredients: [
                    '1 bundle of vegetable',
                    'Melon',
                    'Salt, seasonings and spices',
                    '1 onion chopped',
                    'Pepper',
                    'Fish',
                    'Palm oil'
                ],
                method: [
                    'Pick the leave off the bundle of vegetables',
                    'Boil the vegeables',
                    'Prepare soup with other ingredients',
                    'Add melon and allow to cook',
                    'Pour the boiled leave inside of the stew',
                    'Allow to cook',
                    'Enjoy with Eba or Semo'
                ],
            },
        ],
    },
    mutations: {
        ADD_RECIPE(state, recipe){
            state.recipes.push(recipe)
        }
    },
    actions: {}
}