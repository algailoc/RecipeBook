import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  checkShareAvailabilityBeginAction,
  checkShareAvailabilityErrorAction,
} from '../../../actions/shareActionCreator';

function* ss_checkShareAvailabilityHandler(action) {
  yield put(checkShareAvailabilityBeginAction());

  try {
    const shareService = Services.get(Services.serviceTypes.SHARE);
    yield call(shareService.checkAvailability);
  } catch (e) {
    console.log('ss_checkShareAvailabilityHandler()->ERROR: ' + e);
    yield put(checkShareAvailabilityErrorAction({description: e.toString()}));
  }
}

export default ss_checkShareAvailabilityHandler;
