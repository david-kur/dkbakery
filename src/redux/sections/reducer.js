import { createSelector } from 'reselect';

const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'cookies',
      linkUrl: 'order/cookies',
      imageUrl: 'https://i.imgur.com/5OgIIMk.jpg'
    },
    {
      id: 2,
      title: 'cakes',
      linkUrl: 'order/cakes',
      imageUrl: 'https://i.imgur.com/ronmjM7.jpg'
    },
    {
      id: 3,
      title: 'breads',
      linkUrl: 'order/breads',
      imageUrl: 'https://i.imgur.com/IpA6hgB.jpg'
    },
    {
      id: 4,
      title: 'desserts',
      size: 'large',
      linkUrl: 'order/desserts',
      imageUrl: 'https://i.imgur.com/vjnLhvi.jpg'
    },
    {
      id: 5,
      title: 'drinks',
      size: 'large',
      linkUrl: 'order/drinks',
      imageUrl: 'https://i.imgur.com/koIdsb4.jpg'
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
