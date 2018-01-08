import { Ingredient } from "app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGRIDIENT';

const initialState = {
    ingredients: Ingredient[] [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ]
}

export function shoppingListReducer(state = initialState, action: Action) {

}