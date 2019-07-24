import { createSelector } from 'reselect';
import MENU_DATA from './menu.data';

const INITIAL_STATE = {
  menu: MENU_DATA
};

const orderReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

// SELECTOR
const selectOrder = state => state.order;
export const selectMenu = createSelector(
  [selectOrder],
  order => order.menu
);

export default orderReducer;
