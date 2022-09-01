import { GET_STATE } from '../actions/itemsActions';

const initialState = [] || null;

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
