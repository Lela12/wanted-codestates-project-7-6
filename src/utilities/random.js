export const getRandomString = (length) => {
  return Math.random()
    .toString(32)
    .slice(2, length + 2)
    .toUpperCase();
};
