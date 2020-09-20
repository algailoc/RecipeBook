import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  editRecipeBegin,
  editRecipeError,
  editRecipeFinished,
} from '../../../actions/recipeActionCreator';

function* editRecipeHandler(action) {
  console.log('From saga', action);

  yield put(editRecipeBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.updateRecipe, action.payload);
    console.log('Rows affected', data);
    yield put(editRecipeFinished(action.payload));
  } catch (e) {
    yield put(editRecipeError(e));
  }
}

export default editRecipeHandler;
