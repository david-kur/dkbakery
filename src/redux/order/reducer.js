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
const MENU_ID_MAP = {
  cookies: 1,
  cakes: 2,
  breads: 3,
  desserts: 4,
  drinks: 5
};
export const selectMenu = createSelector(
  [selectOrder],
  order => order.menu
);

export const selectCategory = menuUrlParam =>
  createSelector(
    [selectMenu],
    menu => menu.find(category => category.id === MENU_ID_MAP[menuUrlParam])
  );

export default orderReducer;
