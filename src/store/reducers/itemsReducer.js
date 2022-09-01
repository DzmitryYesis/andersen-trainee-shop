import { GET_STATE } from '../actions/itemsActions';

const initialState = [];

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE:
      return [...action.payload];
    default:
      return state;
  }
};
