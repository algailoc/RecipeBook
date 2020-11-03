import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  removeIngredientBegin,
  removeIngredientError,
  removeIngredientFinished,
} from '../../../actions/recipeActionCreator';

function* removeIngredientHandler(action) {
  console.log('From saga', action);

  yield put(removeIngredientBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.removeIngredient, action.payload);
    console.log('Data: ', data);
    yield put(removeIngredientFinished(data));
  } catch (e) {
    yield put(removeIngredientError(e));
  }
}

export default removeIngredientHandler;
