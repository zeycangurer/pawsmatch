import * as constants from '../constants';

const app = (state = {}, action) => {
  switch (action.type) {
    case constants.REQUEST_SIGN_IN:
      return {
        ...state,
        isSigningIn: true,
      };
    case constants.REQUEST_SIGN_UP:
      return {
        ...state,
        isSigningUp: true,
      };
    case constants.REQUEST_SIGN_OUT:
      return {
        ...state,
        isSigningOut: true,
      };
    default:
      return state;
  }
};

export {app};
