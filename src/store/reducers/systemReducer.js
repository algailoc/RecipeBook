import {SYSTEM_LANGUAGE_SET} from '../types/systemTypes';

const initialState = {
  system: {
    localization: {
      currentLanguageCode: '',
      availableLanguageCodes: [],
    },
  },
};

export const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SYSTEM_LANGUAGE_SET: {
      const languageCode = action.payload.languageCode;
      const availableLanguageCodes = [...action.payload.availableLanguageCodes];

      return {
        ...state,
        system: {
          ...state.system,
          localization: {
            ...state.system.localization,
            currentLanguageCode: languageCode,
            availableLanguageCodes,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};
