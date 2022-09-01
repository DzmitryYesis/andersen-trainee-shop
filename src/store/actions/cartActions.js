export const ADD_ONE_ITEM = 'CART/ADD-ONE-ITEM';
export const ADD_NUMBER_OF_ITEM = 'CART/ADD-NUMBER-OF-ITEM';
export const CLEAR_CART = 'CART/CLEAR-CART';

export const addOneItemAC = amount => ({
  type: ADD_ONE_ITEM,
  payload: {
    amount,
  },
});

export const addNumberOfItem = (number, amount) => ({
  type: ADD_NUMBER_OF_ITEM,
  payload: {
    number,
    amount,
  },
});

export const clearCartAC = () => ({
  type: CLEAR_CART,
});
