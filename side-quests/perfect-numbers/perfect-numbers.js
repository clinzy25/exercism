export const classify = (n) => {
  if (n <= 0)
    throw new Error('Classification is only possible for natural numbers.');
  let aliquot = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 0) aliquot += i;
  }
  if (aliquot === n) return 'perfect';
  return aliquot > n ? 'abundant' : 'deficient';
};
