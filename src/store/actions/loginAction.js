export const SET_IS_LOGGED_IN = 'LOGIN/SET-IS-LOGGED-IN';
export const SET_IS_SHOW_POP_UP = 'LOGIN/SET-IS-SHOW-POP-UP';
export const SET_ERRORS = 'LOGIN/SET-ERRORS';
export const CLEAR_ERROR = 'LOGIN/CLEAR-ERROR';
export const SET_LOGIN_DATA = 'LOGIN/SET-LOGIN-DATA';

export const setIsLoggedInAC = payload => ({
  type: SET_IS_LOGGED_IN,
  payload,
});

export const setIsShowPopUpAC = payload => ({
  type: SET_IS_SHOW_POP_UP,
  payload,
});

export const setErrorsAC = payload => ({
  type: SET_ERRORS,
  payload,
});

export const clearErrorAC = payload => ({
  type: CLEAR_ERROR,
  payload,
});

export const setLoginDataAC = (fieldName, name) => ({
  type: SET_LOGIN_DATA,
  payload: {
    fieldName,
    name,
  },
});
