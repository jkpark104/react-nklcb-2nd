export const getRandom = (n = 1) => {
  return Math.random() * n;
};

export const getRandomCount = (min = 0, max = 10) => {
  // 결과 값: min 보다 크거나 같고, max 보다 작거나 같다.
  return Math.floor(getRandom(max - min) + min);
};
