"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coin = void 0;
class Coin {
    constructor(
    // private coinEnum: CoinEnum,
    amount) {
        this.amount = amount;
    }
    ;
    getAmount() {
        return this.amount;
    }
    ;
    /*
    public getCoinMap(): { [key: number]: number } {
        const coinMap: { [key: number]: number } = {};
        for (const coin of Object.values(this.coinEnum)) {
            coinMap[coin] = 0;
        }
        return coinMap;
    };
    */
    setCoinMap() {
    }
    ;
}
exports.Coin = Coin;
;
