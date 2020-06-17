import React from "react";
import { Client } from "boardgame.io/react";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { ConnectFour } from "./Game";
import { ConnectFourBoard } from "./Board";

const App = Client({
  game: ConnectFour,
  board: ConnectFourBoard,
});

export default App;

const ConnectFourClient = Client({
  game: ConnectFour,
  board: ConnectFourBoard,
  multiplayer: Local(),
});

const AppMulti = () => (
  <div>
    <ConnectFourClient playerID="0" />
    <ConnectFourClient playerID="1" />
  </div>
);

//export default AppMulti;

const ConnectFourRemote = Client({
  game: ConnectFour,
  board: ConnectFourBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

const AppRemote = () => (
  <div>
    <ConnectFourRemote playerID="0" />
    <ConnectFourRemote playerID="1" />
  </div>
);

//export default AppRemote;
