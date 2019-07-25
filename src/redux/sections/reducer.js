import { createSelector } from 'reselect';

const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'cookies',
      linkUrl: 'order/cookies',
      imageUrl: 'https://i.ibb.co/QXf3yY4/cookies.jpg'
    },
    {
      id: 2,
      title: 'cakes',
      linkUrl: 'order/cakes',
      imageUrl: 'https://i.ibb.co/8rq4TdG/cakes.jpg'
    },
    {
      id: 3,
      title: 'breads',
      linkUrl: 'order/breads',
      imageUrl: 'https://i.ibb.co/Zm4MPfN/breads.jpg'
    },
    {
      id: 4,
      title: 'desserts',
      size: 'large',
      linkUrl: 'order/desserts',
      imageUrl: 'https://i.ibb.co/64xMGQ6/dessert.jpg'
    },
    {
      id: 5,
      title: 'drinks',
      size: 'large',
      linkUrl: 'order/drinks',
      imageUrl: 'https://i.ibb.co/y04pkWt/coffee.jpg'
    }
  ]
};

const sectionsReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

// SELECTOR
const selectState = state => state.sections;
export const selectSections = createSelector(
  [selectState],
  state => state.sections
);

export default sectionsReducer;
