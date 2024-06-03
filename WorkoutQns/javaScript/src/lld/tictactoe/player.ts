import { PositionType } from "./cell.js";

export type SymbolType = "X" | "O";

export type PlayerType = {

    player: string;
    symbol: SymbolType | "";

};


export interface IPlayer {

    addPlayer(name: string, symbol: SymbolType): void;

};


export class Player {


    public name: string;
    public symbol: SymbolType | ""


    constructor() {

        this.name = "";
        this.symbol = "";

    };


    getPlayer(): PlayerType {

        return { player: this.name, symbol: this.symbol };

    };


    addPlayer(name: string, symbol: SymbolType): void {

        this.name = name;
        this.symbol = symbol;

    };


};