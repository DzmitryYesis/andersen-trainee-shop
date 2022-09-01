// export const ADD_ONE_ITEM = 'CART/ADD-ONE-ITEM';
// export const ADD_NUMBER_OF_ITEM = 'CART/ADD-NUMBER-OF-ITEM';
export const CLEAR_CART = 'CART/CLEAR-CART';
export const ADD_ITEM_IN_CART = 'CART/ADD-ITEM-IN-CART';
export const ADD_ONE_POSITION_ON_CART = 'CART/ADD-ONE-POSITION-ON-CART';
export const DELETE_ONE_POSITION_ON_CART = 'CART/DELETE-ONE-POSITION-ON-CART';
export const DELETE_ITEM_ON_CART = 'CART/DELETE-ITEM-ON-CART';

// export const addOneItemAC = amount => ({
//   type: ADD_ONE_ITEM,
//   payload: {
//     amount,
//   },
// });

// export const addNumberOfItem = (number, amount) => ({
//   type: ADD_NUMBER_OF_ITEM,
//   payload: {
//     number,
//     amount,
//   },
// });

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

export const addOnePositionOnCartAC = payload => ({
  type: ADD_ONE_POSITION_ON_CART,
  payload,
});

export const deleteOnePositionOnCartAC = payload => ({
  type: DELETE_ONE_POSITION_ON_CART,
  payload,
});

export const deleteItemOnCart = payload => ({
  type: DELETE_ITEM_ON_CART,
  payload,
});
