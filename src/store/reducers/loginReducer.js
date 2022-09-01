import {
  CLEAR_ERROR,
  SET_ERRORS,
  SET_IS_LOGGED_IN,
  SET_IS_SHOW_POP_UP,
  SET_LOGIN_DATA,
} from '../actions/loginAction';

const initialState = {
  isLoggedIn: false,
  isShowPopUp: false,
  errors: {
    email: '',
    password: '',
  },
  loginData: {
    email: '',
    password: '',
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case SET_IS_SHOW_POP_UP:
      return { ...state, isShowPopUp: action.payload };
    case SET_ERRORS:
      return { ...state, errors: { ...action.payload } };
    case CLEAR_ERROR:
      return { ...state, errors: { ...state.errors, [action.payload]: '' } };
    case SET_LOGIN_DATA:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          [action.payload.fieldName]: action.payload.name,
        },
      };
    default:
      return state;
  }
};
