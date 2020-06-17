const { Server } = require("boardgame.io/server");
const TicTacToe = require("./TicTacToe/Game");
const Connect4 = require("./Connect4/Game");

const server = Server({ games: [TicTacToe, Connect4] });

server.run(8000);
