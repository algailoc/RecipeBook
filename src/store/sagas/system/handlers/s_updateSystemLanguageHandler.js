import {call} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';

function* s_updateSystemLanguageHandler(action) {
  try {
    const systemService = Services.get(Services.serviceTypes.SYSTEM);

    yield call(systemService.updateSystemLanguageInfo);
  } catch (e) {
    console.log('Error on updating language:', e);
  }
}

export default s_updateSystemLanguageHandler;
