"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coin = void 0;
const CoinEnum_1 = require("../commons/constant/CoinEnum");
class Coin {
    constructor(amount) {
        this.amount = amount;
    }
    ;
    getAmount() {
        return this.amount;
    }
    ;
    static getAmountOfCoin(amount) {
        for (const coin in CoinEnum_1.CoinEnum) {
            if (!isNaN(Number(coin))) {
                const coinValue = Number(coin);
                if (coinValue === amount) {
                    return new Coin(amount);
                }
            }
        }
    }
    ;
    static getSortedCoinMap(coinList) {
        const coinMap = this.getCoinMap();
        this.setCoinMap(coinList, coinMap);
        return coinMap;
    }
    ;
    static getCoinMap() {
        const coinMap = new Map();
        // Explicitly specify the type of Object.values(CoinEnum)
        Object.values(CoinEnum_1.CoinEnum).forEach((coinValue) => {
            if (typeof coinValue === 'number') {
                coinMap.set(coinValue, 0);
            }
        });
        return coinMap;
    }
    ;
    static setCoinMap(coinList, coinMap) {
        coinList.forEach((coin) => {
            // [!] instance를 생성하지 않는게 의미가 있음..?
            const amount = (coin instanceof Coin) ? coin.getAmount() : coin;
            coinMap.set(amount, (coinMap.get(amount) || 0) + 1);
        });
    }
    ;
}
exports.Coin = Coin;
;
