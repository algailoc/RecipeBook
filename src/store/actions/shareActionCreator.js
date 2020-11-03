import {
  CHECK_SHARE_AVAILABILITY,
  CHECK_SHARE_AVAILABILITY_BEGIN,
  CHECK_SHARE_AVAILABILITY_ERROR,
  SET_SHARE_AVAILABILITY,
  SHARE_RECIPE_INGREDIENTS_VIA_SMS,
  SHARE_RECIPE_INGREDIENTS_VIA_SMS_BEGIN,
  SHARE_RECIPE_INGREDIENTS_VIA_SMS_ERROR,
  SHARE_RECIPE_INGREDIENTS_VIA_SMS_FINISHED,
  SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP,
  SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP_BEGIN,
  SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP_ERROR,
  SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP_FINISHED,
} from '../types/shareTypes';

export const setShareAvailabilityAction = ({
  smsSharingSupported,
  whatsAppSharingSupported,
}) => {
  return {
    type: SET_SHARE_AVAILABILITY,
    payload: {smsSharingSupported, whatsAppSharingSupported},
  };
};

export const checkShareAvailabilityAction = () => {
  return {
    type: CHECK_SHARE_AVAILABILITY,
    payload: undefined,
  };
};

export const checkShareAvailabilityBeginAction = () => {
  return {
    type: CHECK_SHARE_AVAILABILITY_BEGIN,
    payload: undefined,
  };
};

export const checkShareAvailabilityErrorAction = ({description}) => {
  return {
    type: CHECK_SHARE_AVAILABILITY_ERROR,
    payload: {error: {description}},
  };
};

export const shareRecipeIngredientsViaSmsAction = ({id}) => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_SMS,
    payload: {id},
  };
};

export const shareRecipeIngredientsViaSmsBeginAction = () => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_SMS_BEGIN,
    payload: undefined,
  };
};

export const shareRecipeIngredientsViaSmsFinishedAction = () => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_SMS_FINISHED,
    payload: undefined,
  };
};

export const shareRecipeIngredientsViaSmsErrorAction = ({description}) => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_SMS_ERROR,
    payload: {error: {description}},
  };
};

export const shareRecipeIngredientsViaWhatsAppAction = ({id}) => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP,
    payload: {id},
  };
};

export const shareRecipeIngredientsViaWhatsAppBeginAction = () => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP_BEGIN,
    payload: undefined,
  };
};

export const shareRecipeIngredientsViaWhatsAppFinishedAction = () => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP_FINISHED,
    payload: undefined,
  };
};

export const shareRecipeIngredientsViaWhatsAppErrorAction = ({description}) => {
  return {
    type: SHARE_RECIPE_INGREDIENTS_VIA_WHATS_APP_ERROR,
    payload: {error: {description}},
  };
};
