import {call, put, take} from '@redux-saga/core/effects';
import {eventChannel} from 'redux-saga';
import Services from '../../../services/Services';
import SystemServiceEventTypes from '../../../services/system/data/event-types/SystemServiceEventTypes';
import {systemLanguageSetAction} from '../../actions/systemActionCreator';

function createSystemEventsChannel() {
  return eventChannel((emit) => {
    const languageSetHandler = ({languageCode, availableLanguageCodes}) => {
      emit(systemLanguageSetAction({languageCode, availableLanguageCodes}));
    };

    const systemService = Services.get(Services.serviceTypes.SYSTEM);

    const languageSetUnsubscribe = systemService.subscribe({
      event: SystemServiceEventTypes.LANGUAGE_SET,
      handler: languageSetHandler,
    });

    return () => {
      languageSetUnsubscribe();
    };
  });
}

function* systemEventsSaga() {
  console.log('systemEventsSaga()');

  const channel = yield call(createSystemEventsChannel);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default systemEventsSaga;
