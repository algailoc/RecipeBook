import {takeLatest} from '@redux-saga/core/effects';
import {
  CHECK_SHARE_AVAILABILITY,
  SHARE_RECIPE_INGREDIENTS_VIA_SMS,
  SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP,
} from '../../types/shareTypes';
import ss_checkShareAvailabilityHandler from './handlers/ss_checkShareAvailabilityHandler';
import ss_shareRecipeIngredientsViaSmsHandler from './handlers/ss_shareRecipeIngredientsViaSmsHandler';
import ss_shareRecipeIngredientsViaWhatsAppHandler from './handlers/ss_shareRecipeIngredientsViaWhatsAppHandler';

function* shareSaga() {
  yield takeLatest(CHECK_SHARE_AVAILABILITY, ss_checkShareAvailabilityHandler);
  yield takeLatest(
    SHARE_RECIPE_INGREDIENTS_VIA_SMS,
    ss_shareRecipeIngredientsViaSmsHandler,
  );
  yield takeLatest(
    SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP,
    ss_shareRecipeIngredientsViaWhatsAppHandler,
  );
}

export default shareSaga;
