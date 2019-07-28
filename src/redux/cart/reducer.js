import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  SUBTRACT_ITEM,
  CLEAR_CART
} from './types';
import { addItemToCart, subtractItemFromCart } from './utility';
import { createSelector } from 'reselect';
const INITIAL_STATE = { hidden: true, items: [] };

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, items: addItemToCart(state.items, payload) };
    case SUBTRACT_ITEM:
      return { ...state, items: subtractItemFromCart(state.items, payload) };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    case CLEAR_CART:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

// SELECTOR
const selectCart = state => state.cart;

export const selectItemsInCart = createSelector(
  [selectCart],
  cart => cart.items
);

export const selectCountItemsInCart = createSelector(
  [selectItemsInCart],
  items => items.reduce((total, item) => total + item.qty, 0)
);

export const selectCartDropdownHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectTotalPriceInCart = createSelector(
  [selectItemsInCart],
  items => items.reduce((total, item) => total + item.qty * item.price, 0)
);

export default cartReducer;
