import React from "react";
import { Client } from "boardgame.io/react";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import TicTacToeGame from "./Game";
import TicTacToeBoard from "./Board";

export const TicTacToeAppSingle = Client({
  game: TicTacToeGame,
  board: TicTacToeBoard,
});

const TicTacToeClientLocal = Client({
  game: TicTacToeGame,
  board: TicTacToeBoard,
  multiplayer: Local(),
});

export const TicTacToeAppMultiLocal = () => (
  <div>
    <TicTacToeClientLocal playerID="0" />
    <TicTacToeClientLocal playerID="1" />
  </div>
);

const TicTacToeClientRemote = Client({
  game: TicTacToeGame,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

export const TicTacToeAppMultiRemote = () => (
  <div>
    <TicTacToeClientRemote gameID="tictactoeid" playerID="0" />
    <TicTacToeClientRemote gameID="tictactoeid" playerID="1" />
  </div>
);
