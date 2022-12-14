import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer } from './reducers/cartReducer';
import { itemsReducer } from './reducers/itemsReducer';
import { loginReducer } from './reducers/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
  items: itemsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
