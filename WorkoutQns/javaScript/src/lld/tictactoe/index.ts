import { Board } from "./board.js";
import { Cell } from "./cell.js";
import { Player } from "./player.js";


const player = new Player();

const cell = new Cell();


const board = new Board(cell, player);


const player1 = player.addPlayer("Nevin", "X");
const player2 = player.addPlayer("Kevin", "O");

