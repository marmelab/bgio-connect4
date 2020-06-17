import React from "react";
import { Client } from "boardgame.io/react";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import Connect4Game from "./Game";
import Connect4Board from "./Board";

export const Connect4AppSingle = Client({
  game: Connect4Game,
  board: Connect4Board,
});

const Connect4ClientLocal = Client({
  game: Connect4Game,
  board: Connect4Board,
  multiplayer: Local(),
});

export const Connect4AppMultiLocal = () => (
  <div>
    <Connect4ClientLocal playerID="0" />
    <Connect4ClientLocal playerID="1" />
  </div>
);

const Connect4ClientRemote = Client({
  game: Connect4Game,
  board: Connect4Board,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

export const Connect4AppMultiRemote = () => (
  <div>
    <Connect4ClientRemote playerID="0" />
    <Connect4ClientRemote playerID="1" />
  </div>
);
