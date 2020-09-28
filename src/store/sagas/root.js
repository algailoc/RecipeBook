import {all, spawn, call} from 'redux-saga/effects';
import recipeStorageSaga from './recipe-storage/recipeStorageSaga';
import currentRecipeSaga from './current-recipe/currentRecipeSaga';
import systemSaga from './system/systemSaga';
import systemEventsSaga from './system/systemEventsSaga';

function* rootSaga() {
  const sagas = [
    recipeStorageSaga,
    currentRecipeSaga,
    systemSaga,
    systemEventsSaga,
  ];

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
