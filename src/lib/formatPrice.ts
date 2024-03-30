export function formatPrice(price: number) {
  console.log(price);

  return (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
