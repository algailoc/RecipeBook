import {all, spawn, call} from 'redux-saga/effects';
import recipeStorageSaga from './recipe-storage/recipeStorageSaga';
import currentRecipeSaga from './current-recipe/currentRecipeSaga';

function* rootSaga() {
  const sagas = [recipeStorageSaga, currentRecipeSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log('rootSaga()->ERROR: ' + e);
          }
        }
      }),
    ),
  );
}

export default rootSaga;
