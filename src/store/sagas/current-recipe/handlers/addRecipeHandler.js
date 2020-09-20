import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  addRecipeBegin,
  addRecipeFinished,
  addRecipeError,
} from '../../../actions/recipeActionCreator';

function* addRecipeHandler(action) {
  console.log('From saga', action);

  yield put(addRecipeBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.updateRecipe, action.payload);
    console.log('Rows affected', data);
    yield put(addRecipeFinished(action.payload));
  } catch (e) {
    yield put(addRecipeError(e));
  }
}

export default addRecipeHandler;
