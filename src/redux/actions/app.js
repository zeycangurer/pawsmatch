import * as constants from '../constants';
import * as auth from '../../api/auth';
import * as database from '../../api/database';

export const setAccount = (key, value) => ({
  type: constants.SET_ACCOUNT,
  key,
  value,
});

export const signIn = payload => async (dispatch, getState) => {
  const {email, password} = getState().app;
  console.log(email, password);
  dispatch({type: constants.REQUEST_SIGN_IN});
  try {
    await auth.signIn(email, password);
    const user = await auth.getUserInfo();
    console.log(user);
    dispatch({
      type: constants.REQUEST_SIGN_IN,
      payload: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = payload => async (dispatch, getState) => {
  const {email, password} = getState().app;
  dispatch({type: constants.REQUEST_SIGN_UP});
  try {
    await auth.signUp(email, password);
    dispatch({
      type: constants.REQUEST_SIGN_UP,
    });
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

/////////  PETS  /////////

export const setPet = (key, value) => ({
  type: constants.SET_PET,
  payload: {key, value},
});

export const addPet = payload => async (dispatch, getState) => {
  const pet = getState().app.pet;
  const user = auth.getUserInfo();
  console.log(pet, user);
  dispatch({type: constants.REQUEST_ADD_PET});
  try {
    await database.addPet(pet, user);
  } catch (error) {
    console.log(error);
  }
};

export const getPets = payload => async dispatch => {
  dispatch({type: constants.REQUEST_GET_PETS});
  try {
    const pets = await database.getPets();
    dispatch({type: constants.RECEIVE_GET_PETS, payload: {pets}});
  } catch (error) {
    console.log(error);
  }
};

export const getPet = payload => async dispatch => {
  const user = auth.getUserInfo();
  dispatch({type: constants.REQUEST_GET_PET});
  try {
    const myPet = await database.getPet(payload, user);
    console.log('action', myPet);
    dispatch({type: constants.RECEIVE_GET_PET, payload: {myPet}});
  } catch (error) {
    console.log(error);
  }
};

export const updatePet = payload => async (dispatch, getState) => {
  const {pet} = getState().app;
  dispatch({type: constants.REQUEST_UPDATE_PET});
  try {
    await database.updatePet(payload, pet);
  } catch (error) {
    console.log(error);
  }
};

export const deletePet = payload => async dispatch => {
  dispatch({type: constants.REQUEST_DELETE_PET});
  try {
    await database.deletePet(payload);
  } catch (error) {
    console.log(error);
  }
};
