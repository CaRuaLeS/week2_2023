// eslint-disable-next-line arrow-body-style
export const factorial = (n) => {
  if (n > 170)
    throw new Error('could not calculate factorials of these number');
  if (n === 0) return 1;

  return n * factorial(n - 1);
};
