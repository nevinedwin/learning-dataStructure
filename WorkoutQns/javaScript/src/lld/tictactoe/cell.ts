import { PlayerType } from "./player.js";


export type PositionType = number;

export type CellType = {

    cell: PositionType | null,
    player: PlayerType | {}

};


export interface ICell {

    setCell(position: PositionType, player: PlayerType): void;
    getCell(): CellType;
    addCell(position: PositionType): CellType;

};


export class Cell implements ICell {


    public player: PlayerType | {};
    public position: PositionType | null;


    constructor() {

        this.player = {};
        this.position = null;

    };


    addCell(position: PositionType): CellType {

        this.position = position;

        return { cell: this.position, player: this.player };
    };


    getCell(): CellType {

        return { cell: this.position, player: this.player };

    };


    setCell(position: PositionType, player: PlayerType) {

        this.position = position;
        this.player = player;

    };


}