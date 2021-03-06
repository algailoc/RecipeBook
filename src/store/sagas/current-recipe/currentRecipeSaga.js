import {takeLatest} from '@redux-saga/core/effects';
import {
  ADD_RECIPE,
  CREATE_RECIPE,
  REMOVE_RECIPE,
  EDIT_RECIPE,
  GET_RECIPE,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  EDIT_INGREDIENT,
} from '../../types/recipeTypes';
import getRecipeHandler from './handlers/getRecipeHandler';
import createRecipeHandler from './handlers/createRecipeHandler';
import removeRecipeHandler from './handlers/removeRecipeHandler';
import addRecipeHandler from './handlers/addRecipeHandler';
import editRecipeHandler from './handlers/editRecipeHandler';
import addIngredientHandler from './handlers/addIngredientHandler';
import removeIngredientHandler from './handlers/removeIngredientHandler';
import editIngredientHandler from './handlers/editIngredientHandler';

function* currentRecipeSaga() {
  // console.log('currentRecipeSaga loaded');

  yield takeLatest(GET_RECIPE, getRecipeHandler);
  yield takeLatest(CREATE_RECIPE, createRecipeHandler);
  yield takeLatest(ADD_RECIPE, addRecipeHandler);
  yield takeLatest(REMOVE_RECIPE, removeRecipeHandler);
  yield takeLatest(EDIT_RECIPE, editRecipeHandler);
  yield takeLatest(ADD_INGREDIENT, addIngredientHandler);
  yield takeLatest(EDIT_INGREDIENT, editIngredientHandler);
  yield takeLatest(REMOVE_INGREDIENT, removeIngredientHandler);
}

export default currentRecipeSaga;
