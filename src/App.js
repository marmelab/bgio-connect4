import React from "react";
import { Client } from "boardgame.io/react";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { TicTacToe } from "./Game";
import { TicTacToeBoard } from "./Board";

const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});

//export default App;

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: Local(),
});

const AppMulti = () => (
  <div>
    <TicTacToeClient playerID="0" />
    <TicTacToeClient playerID="1" />
  </div>
);

//export default AppMulti;

const TicTacToeRemote = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

const AppRemote = () => (
  <div>
    <TicTacToeRemote playerID="0" />
    <TicTacToeRemote playerID="1" />
  </div>
);

export default AppRemote;
