import {
  CHECK_SHARE_AVAILABILITY_BEGIN,
  CHECK_SHARE_AVAILABILITY_ERROR,
  SET_SHARE_AVAILABILITY,
} from '../types/shareTypes';

const initialState = {
  share: {
    availability: {
      checking: false,
      smsSharingSupported: false,
      whatsAppSharingSupported: false,
    },
  },
};

export const shareReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHARE_AVAILABILITY: {
      return {
        ...state,
        share: {
          ...state.share,
          availability: {
            ...state.share.availability,
            checking: false,
            smsSharingSupported: action.payload.smsSharingSupported,
            whatsAppSharingSupported: action.payload.whatsAppSharingSupported,
          },
        },
      };
    }

    case CHECK_SHARE_AVAILABILITY_BEGIN: {
      return {
        ...state,
        share: {
          ...state.share,
          availability: {
            ...state.share.availability,
            checking: true,
          },
        },
      };
    }

    case CHECK_SHARE_AVAILABILITY_ERROR: {
      console.log('shareReducer->CHECK_SHARE_AVAILABILITY_ERROR');

      return {
        ...state,
        share: {
          ...state.share,
          availability: {
            ...state.share.availability,
            checking: false,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};
