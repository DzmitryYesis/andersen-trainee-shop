export const GET_STATE = 'ITEMS/GET-ITEMS';
export const GET_ONE_ITEM = 'ITEMS/GET-ONE-ITEM';

export const getItemsAC = payload => ({
  type: GET_STATE,
  payload,
});

// export const getOneItemAC =
