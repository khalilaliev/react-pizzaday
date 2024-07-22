export const totalItems = (items) =>
  items.reduce((acc, item) => acc + item.count, 0);
export const totalPrice = (items) =>
  items.reduce((acc, item) => acc + item.count * item.unitPrice, 0);
