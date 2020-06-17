import {
  transposeHorizontally,
  transposeDiagonally,
} from "./tool/ArrayTransposer";
import hasConsecutiveValues from "./tool/ArrayConsecutive";
import { colors } from "./tool/ColorHelper";

const initializeCells = (width, height) =>
  Array.from(Array(width), () => Array(height).fill(colors.empty));

const isColumnFull = (cells, columnNumber) =>
  cells[columnNumber].every((cell) => cell !== 0);

const isFull = (cells) =>
  cells.every((column) => column.every((cell) => cell !== 0));

const hasVerticallyAlignedDiscs = (cells) => hasConsecutiveValues(cells);

const hasHorizontallyAlignedDiscs = (cells) =>
  hasConsecutiveValues(transposeHorizontally(cells));

const hasDiagonalBottomLeftTopRightAlignedDiscs = (cells) =>
  hasConsecutiveValues(transposeDiagonally(cells, true));

const hasDiagonalTopLeftBottomRightAlignedDiscs = (cells) =>
  hasConsecutiveValues(transposeDiagonally(cells));

const isVictory = (cells) =>
  hasVerticallyAlignedDiscs(cells) ||
  hasHorizontallyAlignedDiscs(cells) ||
  hasDiagonalBottomLeftTopRightAlignedDiscs(cells) ||
  hasDiagonalTopLeftBottomRightAlignedDiscs(cells);

const getRowNumber = (cells, columnNumber) => {
  const column = cells[columnNumber];
  let rowNumber = -1;
  for (rowNumber = column.length - 1; rowNumber >= 0; rowNumber -= 1) {
    if (column[rowNumber] === 0) {
      break;
    }
  }

  return rowNumber;
};

export {
  initializeCells,
  isColumnFull,
  isFull,
  isVictory,
  getRowNumber,
  hasVerticallyAlignedDiscs,
  hasHorizontallyAlignedDiscs,
  hasDiagonalBottomLeftTopRightAlignedDiscs,
  hasDiagonalTopLeftBottomRightAlignedDiscs,
};
