import { TOGGLE_CART } from './types';
const INITIAL_STATE = { hidden: true };

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
