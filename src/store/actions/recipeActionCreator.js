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
} from '../types/recipeTypes';

export function addRecipe(id, title, steps, ingredients, img, servings) {
  const action = {
    type: ADD_RECIPE,
    payload: {id, title, steps, ingredients, img, servings},
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

export function addRecipeFinished(title, steps, ingredients, id) {
  const action = {
    type: ADD_RECIPE_FINISHED,
    payload: {title, steps, ingredients, id},
  };
  return action;
}

export function addRecipeError() {
  const action = {
    type: ADD_RECIPE_ERROR,
    payload: undefined,
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

export function removeRecipeFinished() {
  const action = {
    type: REMOVE_RECIPE_FINISHED,
    payload: undefined,
  };
  return action;
}

export function removeRecipeError() {
  const action = {
    type: REMOVE_RECIPE_ERROR,
    payload: undefined,
  };
  return action;
}

export function editRecipe(id, title, steps, ingredients, img, servings) {
  const action = {
    type: EDIT_RECIPE,
    payload: {id, title, steps, ingredients, img, servings},
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

export function editRecipeFinished() {
  const action = {
    type: EDIT_RECIPE_FINISHED,
    payload: undefined,
  };
  return action;
}

export function editRecipeError() {
  const action = {
    type: EDIT_RECIPE_ERROR,
    payload: undefined,
  };
  return action;
}
