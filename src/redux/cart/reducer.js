import { TOGGLE_CART, ADD_ITEM } from './types';
import { addItemToCart } from './utility';
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

export default cartReducer;
