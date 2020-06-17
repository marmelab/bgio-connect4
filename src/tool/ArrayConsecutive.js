const arrayHasConsecutiveValues = (array, numberOfConsecutiveValues = 4) => {
  let consecutiveCells = 0;
  let which;
  const areConsecutive = array.some((currentValue, index) => {
    if (currentValue === 0) {
      consecutiveCells = 0;
      return false;
    }
    if (array[index - 1] === currentValue) {
      consecutiveCells += 1;
    } else {
      consecutiveCells = 1;
    }
    if (consecutiveCells === numberOfConsecutiveValues) {
      which = currentValue;
      return true;
    }
    return false;
  });

  return { areConsecutive, which };
};

const twoDimensionalArrayHasConsecutiveValues = (
  array,
  numberOfConsecutiveValues = 4
) => {
  let which;

  const areConsecutive = array.some((chunk) => {
    const {
      areConsecutive: chunkConsecutive,
      which: chunkWhich,
    } = arrayHasConsecutiveValues(chunk, numberOfConsecutiveValues);
    if (chunkConsecutive) {
      which = chunkWhich;
      return true;
    }
    return false;
  });
  return { areConsecutive, which };
};

export default twoDimensionalArrayHasConsecutiveValues;
