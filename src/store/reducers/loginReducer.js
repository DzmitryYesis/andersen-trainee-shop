import { SET_IS_LOGGED_IN, SET_IS_SHOW_POP_UP } from '../actions/loginAction';

const initialState = {
  isLoggedIn: false,
  isShowPopUp: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case SET_IS_SHOW_POP_UP:
      return { ...state, isShowPopUp: action.payload };
    default:
      return state;
  }
};
