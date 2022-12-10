import * as constants from '../constants';

const initialState = {
  email: 'ceren@gmail.com',
  password: 'ceren123',
  isSigningIn: false,
  isSigningUp: false,

  /////////  PETS  /////////

  pet: {
    name: '',
    type: '',
    gender: '',
    breed: '',
    age: '',
    size: '',
    location: '',
    description: '',
    image: '',
  },
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_SIGN_IN:
      return {
        ...state,
        password: '',
        isSigningIn: true,
      };
    case constants.REQUEST_SIGN_UP:
      return {
        ...state,
        password: '',
        isSigningUp: true,
      };
    case constants.REQUEST_SIGN_OUT:
      return {
        ...state,
        isSigningIn: false,
        isSigningUp: false,
      };
    case constants.SET_ACCOUNT:
      return {
        ...state,
        [action.key]: action.value,
      };

    /////////  PETS  /////////

    case constants.SET_PET:
      return {
        ...state,
        pet: {...state.pet, [action.key]: action.value},
      };
    case constants.REQUEST_ADD_PET:
      return {
        ...state,
        isAddingPet: true,
      };
    case constants.REQUEST_GET_PETS:
      return {
        ...state,
        isGettingPets: true,
      };
    case constants.RECEIVE_GET_PETS:
      return {
        ...state,
        pets: action.pets,
      };
    case constants.REQUEST_GET_PET:
      return {
        ...state,
        isGettingPet: true,
      };
    case constants.RECEIVE_GET_PET:
      return {
        ...state,
        pet: action.pet,
      };
    case constants.REQUEST_UPDATE_PET:
      return {
        ...state,
      };
    case constants.REQUEST_DELETE_PET:
      return {
        ...state,
      };

    /////////  PETS  /////////
    default:
      return state;
  }
};

export {app};
