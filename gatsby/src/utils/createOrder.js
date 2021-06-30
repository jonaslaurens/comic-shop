class Comic {
  constructor(comic) {
    this.serie = comic.serie.title;
    this.number = comic.number;
    this.title = comic.title;
  }
}

export const createOrder = (items) => {
  const order = [];

  items.forEach((item) => {
    order.push(new Comic(item));
  });

  return order;
};
