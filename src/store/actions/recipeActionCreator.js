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
} from '../types/recipeTypes';

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

export function editRecipe(id, title, steps, ingredients, imagePath, servings) {
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
