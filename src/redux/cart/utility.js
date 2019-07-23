export const addItemToCart = (items, itemToAdd) => {
  const itemExistInCart = items.find(item => item.id === itemToAdd.id);
  if (itemExistInCart) {
    return items.map(item =>
      item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...items, { ...itemToAdd, qty: 1 }];
};
