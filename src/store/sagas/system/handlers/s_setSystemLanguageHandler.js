import {call} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';

function* s_setSystemLanguageHandler(action) {
  const {languageCode} = action.payload;

  try {
    const systemService = Services.get(Services.serviceTypes.SYSTEM);

    yield call(systemService.setSystemLanguageCode, {languageCode});
  } catch (e) {
    console.log('Error on setting language:', e);
  }
}

export default s_setSystemLanguageHandler;
