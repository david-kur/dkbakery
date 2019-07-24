import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import sectionsReducer from './sections/reducer';
import orderReducer from './order/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  sections: sectionsReducer,
  order: orderReducer
});

export default persistReducer(persistConfig, rootReducer);
