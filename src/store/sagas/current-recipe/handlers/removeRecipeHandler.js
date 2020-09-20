import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  removeRecipeBegin,
  removeRecipeError,
  removeRecipeFinished,
} from '../../../actions/recipeActionCreator';

function* removeRecipeHandler(action) {
  console.log('From saga', action);

  yield put(removeRecipeBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.removeRecipe, action.payload);
    console.log('Rows affected', data);
    yield put(removeRecipeFinished(action.payload));
  } catch (e) {
    yield put(removeRecipeError(e));
  }
}

export default removeRecipeHandler;
