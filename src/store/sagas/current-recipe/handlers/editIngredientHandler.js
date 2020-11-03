import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  editIngredientBegin,
  editIngredientFinished,
  editIngredientError,
} from '../../../actions/recipeActionCreator';

function* editIngredientHandler(action) {
  console.log('From saga', action);

  yield put(editIngredientBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.updateIngredient, action.payload);
    console.log('Data: ', data);
    yield put(editIngredientFinished(data));
  } catch (e) {
    yield put(editIngredientError(e));
  }
}

export default editIngredientHandler;
