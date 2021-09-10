export const getPublishers = (data) => {
  const publishers = [];

  data.forEach((item) => {
    publishers.push(item.serie.publisher);
  });

  return publishers.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );
};
