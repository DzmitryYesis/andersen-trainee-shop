export const ADD_ONE_ITEM = 'CART/ADD-ONE-ITEM';
export const ADD_NUMBER_OF_ITEM = 'CART/ADD-NUMBER-OF-ITEM';
export const CLEAR_CART = 'CART/CLEAR-CART';
export const ADD_ITEM_IN_CART = 'CART/ADD-ITEM-IN-CART';

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

export const addItemInCartAC = (item, number) => ({
  type: ADD_ITEM_IN_CART,
  payload: {
    item,
    number,
  },
});
