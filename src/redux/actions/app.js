import * as constants from '../constants';
import * as auth from '../../api/auth';

export const setAcoount = (key, value) => ({
  type: constants.SET_ACCOUNT,
  key,
  value,
});

export const signIn = payload => async (dispatch, getState) => {
  const {email, password} = getState().app;
  dispatch({type: constants.REQUEST_SIGN_IN});
  try {
    await auth.signIn(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = payload => async (dispatch, getState) => {
  const {email, password} = getState().app;
  dispatch({type: constants.REQUEST_SIGN_UP});
  try {
    await auth.signUp(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signOut = payload => async dispatch => {
  dispatch({type: constants.REQUEST_SIGN_OUT});
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
