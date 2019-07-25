import { UPDATE_MENU } from './types';

export const updateMenu = menuData => ({
  type: UPDATE_MENU,
  payload: menuData
});
