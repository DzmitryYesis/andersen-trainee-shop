import { getItemsAC } from '../actions/itemsActions';

export const getUsersTC = () => dispatch => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => dispatch(getItemsAC(data)));
};
