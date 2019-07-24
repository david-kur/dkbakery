import { TOGGLE_CART, ADD_ITEM } from './types';
import { addItemToCart } from './utility';
import { createSelector } from 'reselect';
const INITIAL_STATE = { hidden: true, items: [] };

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, items: addItemToCart(state.items, payload) };
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

export default cartReducer;
