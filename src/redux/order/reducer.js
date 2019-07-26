import { createSelector } from 'reselect';
import OrderActionTypes from './types';

const INITIAL_STATE = {
  menu: null,
  error: '',
  loading: false
};

const orderReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case OrderActionTypes.LOADING:
      return { ...state, loading: true };
    case OrderActionTypes.FETCH_MENU_SUCCESS:
      return { ...state, menu: payload, loading: false };
    case OrderActionTypes.FETCH_MENU_FAIL:
      return { ...state, error: payload, loading: false };
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
    menu => (menu ? menu[menuUrlParam] : [])
  );

export const selectMenuForPreview = createSelector(
  [selectMenu],
  menu => (menu ? Object.keys(menu).map(key => menu[key]) : [])
);

export default orderReducer;
