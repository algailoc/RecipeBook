import {takeLatest} from '@redux-saga/core/effects';
import {
  SET_SYSTEM_LANGUAGE,
  UPDATE_SYSTEM_LANGUAGE,
} from '../../types/systemTypes';
import s_updateSystemLanguageHandler from './handlers/s_updateSystemLanguageHandler';
import s_setSystemLanguageHandler from './handlers/s_setSystemLanguageHandler';

function* systemSaga() {
  // console.log('systemSaga loaded');

  yield takeLatest(UPDATE_SYSTEM_LANGUAGE, s_updateSystemLanguageHandler);
  yield takeLatest(SET_SYSTEM_LANGUAGE, s_setSystemLanguageHandler);
}

export default systemSaga;
