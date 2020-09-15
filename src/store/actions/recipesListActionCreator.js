import {
  LOAD_RECIPES_LIST,
  LOAD_RECIPES_LIST_BEGIN,
  LOAD_RECIPES_LIST_FINISHED,
  LOAD_RECIPES_LIST_ERROR,
} from '../types/recipesListTypes';

export function loadRecipesList() {
  const action = {
    type: LOAD_RECIPES_LIST,
    payload: undefined,
  };
  return action;
}

export function loadRecipesListBegin() {
  const action = {
    type: LOAD_RECIPES_LIST_BEGIN,
    payload: undefined,
  };
  return action;
}

export function loadRecipesListFinished(recipesList) {
  const action = {
    type: LOAD_RECIPES_LIST_FINISHED,
    payload: recipesList,
  };
  return action;
}

export function loadRecipesListError() {
  const action = {
    type: LOAD_RECIPES_LIST_ERROR,
    payload: undefined,
  };
  return action;
}
