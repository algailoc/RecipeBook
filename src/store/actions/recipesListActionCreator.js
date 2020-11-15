import {
  LOAD_RECIPES_LIST,
  LOAD_RECIPES_LIST_BEGIN,
  LOAD_RECIPES_LIST_FINISHED,
  LOAD_RECIPES_LIST_ERROR,
  CHANGE_SORT_DIRECTION,
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

export function loadRecipesListError(error) {
  const action = {
    type: LOAD_RECIPES_LIST_ERROR,
    payload: error,
  };
  return action;
}

export function changeSortDirection(sortDirection) {
  const action = {
    type: CHANGE_SORT_DIRECTION,
    payload: sortDirection,
  };
  return action;
}
