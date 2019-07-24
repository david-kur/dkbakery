export const addItemToCart = (items, itemToAdd) => {
  const itemExistInCart = items.find(item => item.id === itemToAdd.id);
  if (itemExistInCart) {
    return items.map(item =>
      item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...items, { ...itemToAdd, qty: 1 }];
};

export const subtractItemFromCart = (items, idToSubtract) => {
  const existingItem = items.find(item => item.id === idToSubtract);
  if (existingItem.qty === 1) {
    return items.filter(item => item.id !== existingItem.id);
  }
  return items.map(item =>
    item.id === idToSubtract ? { ...item, qty: item.qty - 1 } : item
  );
};
