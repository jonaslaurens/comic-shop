export const getQuantity = (items, id) =>
  items.find((item) => {
    let itemQty = 0;

    if (item.id === id) {
      itemQty = item.qty;
    }

    return itemQty;
  });
