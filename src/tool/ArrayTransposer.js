export const transposeHorizontally = (array) =>
  array[0].map((column, i) => array.map((row) => row[i]));

export const transposeDiagonally = (array, bottomToTop = false) => {
  const transposedCells = [];
  const yLength = array.length;
  const xLength = array[0].length;
  const maxLength = Math.max(xLength, yLength);

  for (let k = 0; k <= 2 * maxLength; k += 1) {
    const row = [];

    for (let y = yLength - 1; y >= 0; y -= 1) {
      const x = k - (bottomToTop ? yLength - y : y);
      if (x >= 0 && x < xLength) {
        row.push(array[y][x]);
      }
    }

    if (row.length > 0) {
      transposedCells.push(row);
    }
  }

  return transposedCells;
};
