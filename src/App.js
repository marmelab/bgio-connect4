import React from "react";
import { Lobby } from "boardgame.io/react";
import {
  TicTacToeGame,
  TicTacToeBoard,
  TicTacToeAppSingle,
  TicTacToeAppMultiLocal,
  TicTacToeAppMultiRemote,
} from "./TicTacToe";
import {
  Connect4Game,
  Connect4Board,
  Connect4AppSingle,
  Connect4AppMultiLocal,
  Connect4AppMultiRemote,
} from "./Connect4";

export default TicTacToeAppMultiRemote;

const importedGames = [
  { game: TicTacToeGame, board: TicTacToeBoard },
  { game: Connect4Game, board: Connect4Board },
];

const GameLobby = () => {
  return (
    <Lobby
      gameServer={`https://${window.location.hostname}:8000`}
      lobbyServer={`https://${window.location.hostname}:8000`}
      gameComponents={[importedGames]}
    />
  );
};

//export default GameLobby;
