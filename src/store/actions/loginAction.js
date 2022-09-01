export const SET_IS_LOGGED_IN = 'LOGIN/SET-IS-LOGGED-IN';
export const SET_IS_SHOW_POP_UP = 'LOGIN/SET-IS-SHOW-POP-UP';

export const setIsLoggedInAC = payload => ({
  type: SET_IS_LOGGED_IN,
  payload,
});

export const setIsShowPopUpAC = payload => ({
  type: SET_IS_SHOW_POP_UP,
  payload,
});
