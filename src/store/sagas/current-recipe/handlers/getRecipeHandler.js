import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  getRecipeBegin,
  getRecipeError,
  getRecipeFinished,
} from '../../../actions/recipeActionCreator';

function* getRecipeHandler(action) {
  console.log('From saga', action);

  yield put(getRecipeBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const recipe = yield call(recipesService.getRecipe, action.payload);
    yield put(getRecipeFinished(recipe));
  } catch (e) {
    yield put(getRecipeError(e));
  }
}

export default getRecipeHandler;
