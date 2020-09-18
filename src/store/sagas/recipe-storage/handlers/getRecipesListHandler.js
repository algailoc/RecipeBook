import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  loadRecipesListBegin,
  loadRecipesListFinished,
  loadRecipesListError,
} from '../../../actions/recipesListActionCreator';

function* getRecipesListHandler(action) {
  console.log('From saga', action);

  yield put(loadRecipesListBegin());

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.getRecipesList);
    yield put(loadRecipesListFinished(data));
  } catch (e) {
    yield put(loadRecipesListError(e));
  }
}

export default getRecipesListHandler;
