import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
const initialState = {
  ingredients: null,
  error: false,
  totalPrice: 4,
  building: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updateIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      };
      const updateIngredients = updateObject(
        state.ingredients,
        updateIngredient
      );
      const updateState = {
        ingredients: updateIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };
      return updateObject(state, updateState);

    case actionTypes.REMOVE_INGREDIENT:
      const updateIng = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      };
      const updateIngs = updateObject(state.ingredients, updateIng);
      const updateSt = {
        ingredients: updateIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };
      return updateObject(state, updateSt);

    case actionTypes.SET_INGREDIENT:
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: 4,
        error: false,
        building: false,
      });
    case actionTypes.FETCH_INGREDIENT_FAILED:
      return updateObject(state, {
        error: true,
      });
  }
  return state;
};

export default reducer;
