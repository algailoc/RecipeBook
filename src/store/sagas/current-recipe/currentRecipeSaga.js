import {takeLatest} from '@redux-saga/core/effects';
import {CREATE_RECIPE} from '../../types/recipeTypes';
import createRecipeHandler from './handlers/createRecipeHandler';

function* currentRecipeSaga() {
  console.log('currentRecipeSaga loaded');

  yield takeLatest(CREATE_RECIPE, createRecipeHandler);
}

export default currentRecipeSaga;
