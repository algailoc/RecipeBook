import {takeLatest} from '@redux-saga/core/effects';
import getRecipesListHandler from './handlers/getRecipesListHandler';
import addRecipeHandler from './handlers/addRecipeHandler';
import {LOAD_RECIPES_LIST} from '../../types/recipesListTypes';
import {ADD_RECIPE} from '../../types/recipeTypes';

function* recipeStorageSaga() {
  console.log('recipeStorageSaga loaded');

  yield takeLatest(LOAD_RECIPES_LIST, getRecipesListHandler);
  yield takeLatest(ADD_RECIPE, addRecipeHandler);
}

export default recipeStorageSaga;
