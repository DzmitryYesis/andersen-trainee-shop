import {
  ADD_ITEM_IN_CART,
  ADD_ONE_POSITION_ON_CART,
  CLEAR_CART,
  DELETE_ITEM_ON_CART,
  DELETE_ONE_POSITION_ON_CART,
} from '../actions/cartActions';

const initialState = {
  cartPage: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_ONE_ITEM:
    //   return {
    //     ...state,
    //     headerCart: {
    //       ...state.headerCart,
    //       items: state.headerCart.items + 1,
    //       amount: state.headerCart.amount + action.payload.amount,
    //     },
    //   };
    // case ADD_NUMBER_OF_ITEM:
    //   return {
    //     ...state,
    //     headerCart: {
    //       ...state.headerCart,
    //       items: state.headerCart.items + action.payload.number,
    //       amount: state.headerCart.amount + action.payload.amount * action.payload.number,
    //     },
    //   };
    case CLEAR_CART:
      return { ...state, cartPage: [] };
    case ADD_ITEM_IN_CART: {
      const index = state.cartPage.findIndex(({ id }) => id === action.payload.item.id);
      if (index === -1) {
        return { ...state, cartPage: [...state.cartPage, action.payload.item] };
      }
      return {
        ...state,
        cartPage: state.cartPage.map(item =>
          item.id === action.payload.item.id
            ? {
                ...item,
                totalCount: item.totalCount + action.payload.number,
                totalPrice:
                  item.totalPrice + action.payload.item.price * action.payload.number,
              }
            : item,
        ),
      };
    }
    case ADD_ONE_POSITION_ON_CART:
      return {
        ...state,
        cartPage: state.cartPage.map(item =>
          item.id === action.payload
            ? {
                ...item,
                totalCount: item.totalCount + 1,
                totalPrice: item.totalPrice + item.price,
              }
            : item,
        ),
      };
    case DELETE_ONE_POSITION_ON_CART:
      return {
        ...state,
        cartPage: state.cartPage.map(item =>
          item.id === action.payload
            ? {
                ...item,
                totalCount: item.totalCount > 2 ? item.totalCount - 1 : 1,
                totalPrice:
                  item.totalPrice > item.price
                    ? item.totalPrice - item.price
                    : item.price,
              }
            : item,
        ),
      };
    case DELETE_ITEM_ON_CART:
      return {
        ...state,
        cartPage: state.cartPage.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
