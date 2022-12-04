import * as constants from '../constants';

const initialState = {
  email: '',
  password: '',
};

const app = (state = initialState, action) => {
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
    case constants.SET_ACCOUNT:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export {app};
