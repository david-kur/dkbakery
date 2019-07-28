import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  SUBTRACT_ITEM,
  CLEAR_CART
} from './types';

export const toggleCart = () => ({ type: TOGGLE_CART });
export const addItem = item => ({ type: ADD_ITEM, payload: item });
export const removeItem = id => ({ type: REMOVE_ITEM, payload: id });
export const subtractItem = id => ({ type: SUBTRACT_ITEM, payload: id });
export const clearCart = () => ({ type: CLEAR_CART });
