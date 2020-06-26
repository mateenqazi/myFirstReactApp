import * as actionsTypes from "./actionTypes";
import axios from "../../axios-orders";
export const addIngredient = (name) => {
  return {
    type: actionsTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionsTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionsTypes.FETCH_INGREDIENT_FAILED,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionsTypes.SET_INGREDIENT,
    ingredients: ingredients,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://react-my-burger-62b6d.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
