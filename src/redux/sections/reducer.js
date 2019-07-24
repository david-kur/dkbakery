import { createSelector } from 'reselect';

const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'cookies',
      linkUrl: 'cookies',
      imageUrl: './images/cookies.jpg'
    },
    {
      id: 2,
      title: 'cakes',
      linkUrl: 'cakes',
      imageUrl: './images/cakes.jpg'
    },
    {
      id: 3,
      title: 'breads',
      linkUrl: 'breads',
      imageUrl: './images/breads.jpg'
    },
    {
      id: 4,
      title: 'desserts',
      size: 'large',
      linkUrl: 'desserts',
      imageUrl: './images/dessert.jpg'
    },
    {
      id: 5,
      title: 'drinks',
      size: 'large',
      linkUrl: 'drinks',
      imageUrl: './images/coffee.jpg'
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
