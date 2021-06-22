const formatter = Intl.NumberFormat('sfb', {
  style: 'currency',
  currency: 'EUR',
});

export const formatMoney = (cents) => formatter.format(cents / 100);
