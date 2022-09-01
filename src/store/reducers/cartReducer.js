import { ADD_NUMBER_OF_ITEM, ADD_ONE_ITEM, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  headerCart: {
    items: 0,
    amount: 0,
  },
  cartPage: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE_ITEM:
      return {
        ...state,
        headerCart: {
          ...state.headerCart,
          items: state.headerCart.items + 1,
          amount: state.headerCart.amount + action.payload.amount,
        },
      };
    case ADD_NUMBER_OF_ITEM:
      return {
        ...state,
        headerCart: {
          ...state.headerCart,
          items: state.headerCart.items + action.payload.number,
          amount: state.headerCart.amount + action.payload.amount * action.payload.number,
        },
      };
    case CLEAR_CART:
      return { ...state, headerCart: { ...state.headerCart, items: 0, amount: 0 } };
    default:
      return state;
  }
};
