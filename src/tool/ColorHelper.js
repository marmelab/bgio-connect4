export const colors = {
  empty: 0,
  red: 1,
  yellow: 2,
};

export const getRandomColor = function () {
  return Math.random() < 0.5 ? colors.red : colors.yellow;
};

export const getOtherColor = function (color) {
  return color === colors.red ? colors.yellow : colors.red;
};
