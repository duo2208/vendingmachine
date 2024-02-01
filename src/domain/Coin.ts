import { CoinEnum } from "../commons/constant/CoinEnum";

export class Coin {
    constructor(
        // private coinEnum: CoinEnum,
        readonly amount: number
    ) {};

    public getAmount(): number {
        return this.amount;
    };

    /*
    public getCoinMap(): { [key: number]: number } {
        const coinMap: { [key: number]: number } = {};
        for (const coin of Object.values(this.coinEnum)) {
            coinMap[coin] = 0;
        }
        return coinMap;
    };
    */

    public setCoinMap(): any {

    };
};