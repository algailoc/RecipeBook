import {
  ADD_RECIPE,
  ADD_RECIPE_BEGIN,
  ADD_RECIPE_ERROR,
  ADD_RECIPE_FINISHED,
  REMOVE_RECIPE,
  REMOVE_RECIPE_BEGIN,
  REMOVE_RECIPE_ERROR,
  REMOVE_RECIPE_FINISHED,
  EDIT_RECIPE,
  EDIT_RECIPE_BEGIN,
  EDIT_RECIPE_ERROR,
  EDIT_RECIPE_FINISHED,
  CREATE_RECIPE,
  CREATE_RECIPE_BEGIN,
  CREATE_RECIPE_FINISHED,
  CREATE_RECIPE_ERROR,
  GET_RECIPE,
  GET_RECIPE_BEGIN,
  GET_RECIPE_FINISHED,
  GET_RECIPE_ERROR,
  ADD_INGREDIENT,
  ADD_INGREDIENT_BEGIN,
  ADD_INGREDIENT_FINISHED,
  ADD_INGREDIENT_ERROR,
} from '../types/recipeTypes';

export function getRecipe(id) {
  const action = {
    type: GET_RECIPE,
    payload: id,
  };
  return action;
}

export function getRecipeBegin() {
  const action = {
    type: GET_RECIPE_BEGIN,
    payload: undefined,
  };
  return action;
}

export function getRecipeFinished(recipe) {
  const action = {
    type: GET_RECIPE_FINISHED,
    payload: recipe,
  };
  return action;
}

export function getRecipeError(e) {
  const action = {
    type: GET_RECIPE_ERROR,
    payload: e,
  };
  return action;
}

export function createRecipe() {
  const action = {
    type: CREATE_RECIPE,
    payload: undefined,
  };
  return action;
}

export function createRecipeBegin() {
  const action = {
    type: CREATE_RECIPE_BEGIN,
    payload: undefined,
  };
  return action;
}

export function createRecipeFinished(data) {
  const action = {
    type: CREATE_RECIPE_FINISHED,
    payload: data,
  };
  return action;
}

export function createRecipeError(e) {
  const action = {
    type: CREATE_RECIPE_ERROR,
    payload: e,
  };
  return action;
}

export function addRecipe(id, title, steps, ingredients, imagePath, servings) {
  const action = {
    type: ADD_RECIPE,
    payload: {id, title, steps, ingredients, imagePath, servings},
  };
  return action;
}

export function addRecipeBegin() {
  const action = {
    type: ADD_RECIPE_BEGIN,
    payload: undefined,
  };
  return action;
}

export function addRecipeFinished({
  id,
  title,
  steps,
  ingredients,
  imagePath,
  servings,
}) {
  const action = {
    type: ADD_RECIPE_FINISHED,
    payload: {id, title, steps, ingredients, imagePath, servings},
  };
  return action;
}

export function addRecipeError(e) {
  const action = {
    type: ADD_RECIPE_ERROR,
    payload: e,
  };
  return action;
}

export function removeRecipe(id) {
  const action = {
    type: REMOVE_RECIPE,
    payload: id,
  };
  return action;
}

export function removeRecipeBegin() {
  const action = {
    type: REMOVE_RECIPE_BEGIN,
    payload: undefined,
  };
  return action;
}

export function removeRecipeFinished(id) {
  const action = {
    type: REMOVE_RECIPE_FINISHED,
    payload: id,
  };
  return action;
}

export function removeRecipeError(e) {
  const action = {
    type: REMOVE_RECIPE_ERROR,
    payload: e,
  };
  return action;
}

export function editRecipe(id, title, steps, ingredients, imagePath, servings) {
  const action = {
    type: EDIT_RECIPE,
    payload: {id, title, steps, ingredients, imagePath, servings},
  };
  return action;
}

export function editRecipeBegin() {
  const action = {
    type: EDIT_RECIPE_BEGIN,
    payload: undefined,
  };
  return action;
}

export function editRecipeFinished({
  id,
  title,
  steps,
  ingredients,
  imagePath,
  servings,
}) {
  const action = {
    type: EDIT_RECIPE_FINISHED,
    payload: {id, title, steps, ingredients, imagePath, servings},
  };
  return action;
}

export function editRecipeError(e) {
  const action = {
    type: EDIT_RECIPE_ERROR,
    payload: e,
  };
  return action;
}

export function addIngredient(recipeId, name, amount, unit) {
  const action = {
    type: ADD_INGREDIENT,
    payload: {recipeId, name, amount, unit},
  };
  return action;
}

export function addIngredientBegin() {
  const action = {
    type: ADD_INGREDIENT_BEGIN,
    payload: undefined,
  };
  return action;
}

export function addIngredientFinished(recipeId, name, amount, unit) {
  const action = {
    type: ADD_INGREDIENT_FINISHED,
    payload: {recipeId, name, amount, unit},
  };
  return action;
}

export function addIngredientError(e) {
  const action = {
    type: ADD_INGREDIENT_ERROR,
    payload: e,
  };
  return action;
}
