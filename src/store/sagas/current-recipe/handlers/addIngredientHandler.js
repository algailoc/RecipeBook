import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  addIngredientBegin,
  addIngredientError,
  addIngredientFinished,
} from '../../../actions/recipeActionCreator';

function* addIngredientHandler(action) {
  console.log('From saga', action);

  yield put(addIngredientBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.addIngredient, action.payload);
    console.log('New ingredient:', data);
    yield put(addIngredientFinished());
  } catch (e) {
    yield put(addIngredientError(e));
  }
}

export default addIngredientHandler;
