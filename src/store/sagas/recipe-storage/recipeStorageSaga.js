import {takeLatest} from '@redux-saga/core/effects';
import getRecipesListHandler from './handlers/getRecipesListHandler';
import {LOAD_RECIPES_LIST} from '../../types/recipesListTypes';

function* recipeStorageSaga() {
  console.log('recipeStorageSaga loaded');

  yield takeLatest(LOAD_RECIPES_LIST, getRecipesListHandler);
}

export default recipeStorageSaga;
