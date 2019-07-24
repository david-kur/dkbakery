import { SET_CURRENT_USER } from './types';
import { createSelector } from 'reselect';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

// SELECTOR
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export default userReducer;
