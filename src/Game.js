import { INVALID_MOVE } from "boardgame.io/core";
import {
  initializeCells,
  isFull,
  isColumnFull,
  isVictory,
  getRowNumber,
} from "./BoardModel";

const WIDTH = 7;
const HEIGHT = 6;

export const ConnectFour = {
  setup: () => ({ cells: initializeCells(WIDTH, HEIGHT) }),
  turn: {
    moveLimit: 1,
  },
  moves: {
    clickColumn: (G, ctx, id) => {
      if (isColumnFull(G.cells, id)) {
        return INVALID_MOVE;
      }

      G.cells[id][getRowNumber(G.cells, id)] =
        parseInt(ctx.currentPlayer, 10) + 1;
    },
  },
  endIf: (G, ctx) => {
    /*if (isVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }*/
    if (isFull(G.cells)) {
      return { draw: true };
    }
  },
  ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < WIDTH; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickColumn", args: [i] });
        }
      }
      return moves;
    },
  },
};
