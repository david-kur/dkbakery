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

export const selectCategory = menuUrlParam =>
  createSelector(
    [selectMenu],
    menu => menu[menuUrlParam]
  );

export const selectMenuForPreview = createSelector(
  [selectMenu],
  menu => Object.keys(menu).map(key => menu[key])
);

export default orderReducer;
