const { Server } = require("boardgame.io/server");
const { TicTacToeGame } = require("./TicTacToe");
const { Connect4Game } = require("./Connect4");

const server = Server({ games: [TicTacToeGame, Connect4Game] });

server.run(8000);
