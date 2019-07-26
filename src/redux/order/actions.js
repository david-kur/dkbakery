import OrderActionTypes from './types';

export const fetchMenu = () => ({
  type: OrderActionTypes.FETCH_MENU
});

export const fetchMenuSuccess = menuData => ({
  type: OrderActionTypes.FETCH_MENU_SUCCESS,
  payload: menuData
});

export const fetchMenuFail = message => ({
  type: OrderActionTypes.FETCH_MENU_FAIL,
  payload: message
});
