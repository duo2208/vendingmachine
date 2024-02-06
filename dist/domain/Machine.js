"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
const Coin_1 = require("./Coin");
class Machine {
    constructor() {
        this.coins = [];
        this.items = [];
        return;
    }
    ;
    setCoins(coins) {
        this.coins.push(...coins);
    }
    ;
    getCoins() {
        return Coin_1.Coin.getSortedCoinMap(this.coins);
    }
    ;
    /*
    public getReturnCoinMap(): Map<number, number> {
        return this.getCoinMap();
    };

    public getCoinMap(): Map<number, number> {
        const coinMap: Map<number, number> = Coin.getSortedCoinMap(this.coins);
        const
    };

    private getReturnCoinMap(restCoin: number): Map<number, number> {
        const coinMap: Map<number, number> = Coin.getSortedCoinMap(this.coins);
        const returnCoinMap: Map<number, number> = new Map<number, number>();

        for (const coin of coinMap.keys()) {
            restCoin = this.setReturnCoinMapByCoinAndReturnRestCoin(
                restCoin,
                coinMap,
                returnCoinMap,
                coin
            );
        }

        return returnCoinMap;
    }
    */
    verifyCoin(restCoin, coin, count) {
        return restCoin >= coin && count > 0;
    }
    ;
}
exports.Machine = Machine;
