import {
  ADD_RECIPE,
  ADD_RECIPE_BEGIN,
  ADD_RECIPE_ERROR,
  ADD_RECIPE_FINISHED,
} from '../types/recipeTypes';

export function addRecipe(title) {
  const action = {
    type: ADD_RECIPE,
    payload: title,
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

export function addRecipeFinished(title, id) {
  const action = {
    type: ADD_RECIPE_FINISHED,
    payload: {title, id},
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
