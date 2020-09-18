import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  createRecipe,
  createRecipeBegin,
  createRecipeError,
  createRecipeFinished,
} from '../../../actions/recipeActionCreator';

function* createRecipeHandler(action) {
  console.log('From saga', action);

  yield put(createRecipeBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.createRecipe);
    yield put(createRecipeFinished(data));
  } catch (e) {
    yield put(createRecipeError(e));
  }
}

export default createRecipeHandler;
