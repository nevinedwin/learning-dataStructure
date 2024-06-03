import { CellType, ICell, PositionType } from "./cell.js";
import { IPlayer, PlayerType } from "./player.js";


type BoardType = CellType[];


export class Board {


    public board: BoardType;
    public Icell: ICell;
    public Iplayer: IPlayer;


    constructor(Icell: ICell, IPlayer: IPlayer) {

        this.board = [];
        this.Icell = Icell;
        this.Iplayer = IPlayer;


        for (let i = 1; i < 10; i++) {

            const cell = this.Icell.addCell(i);
            this.board.push(cell);

        };

    };


    getBaord(): BoardType {

        return this.board;

    };


    setBoard(player: PlayerType, position: PositionType) {

        const cell = this.board[position];

        console.log(cell);

    };


} 