import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {createRecipe} from '../../../actions/recipeActionCreator';

function* createRecipeHandler(action) {
  console.log('From saga', action);

  const recipesService = Services.get(Services.serviceTypes.RECIPES_STORAGE);

  try {
    const data = yield call(recipesService.createRecipe);
    yield put(createRecipe(data));
  } catch (e) {
    console.log('Error ', e);
  }
}

export default createRecipeHandler;
