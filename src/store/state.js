import { combineReducers, createStore } from 'redux';

import { cartReducer } from './reducers/cartReducer';
import { loginReducer } from './reducers/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer);
