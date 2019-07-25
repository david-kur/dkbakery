import { createSelector } from 'reselect';
import { UPDATE_MENU } from './types';

const INITIAL_STATE = {
  menu: null
};

const orderReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_MENU:
      return { ...state, menu: payload };
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
    menu => (menu ? menu[menuUrlParam] : null)
  );

export const selectMenuForPreview = createSelector(
  [selectMenu],
  menu => (menu ? Object.keys(menu).map(key => menu[key]) : [])
);

export default orderReducer;
