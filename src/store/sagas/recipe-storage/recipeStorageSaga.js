import {takeLatest} from '@redux-saga/core/effects';
import getRecipesListHandler from './handlers/getRecipesListHandler';
import addRecipeHandler from './handlers/addRecipeHandler';
import removeRecipeHandler from './handlers/removeRecipeHandler';
import {LOAD_RECIPES_LIST} from '../../types/recipesListTypes';
import {ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE} from '../../types/recipeTypes';
import editRecipeHandler from './handlers/editRecipeHandler';

function* recipeStorageSaga() {
  console.log('recipeStorageSaga loaded');

  yield takeLatest(LOAD_RECIPES_LIST, getRecipesListHandler);
  yield takeLatest(ADD_RECIPE, addRecipeHandler);
  yield takeLatest(REMOVE_RECIPE, removeRecipeHandler);
  yield takeLatest(EDIT_RECIPE, editRecipeHandler);
}

export default recipeStorageSaga;
