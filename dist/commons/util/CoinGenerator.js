"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinGenerator = void 0;
const mission_utils_1 = require("@woowacourse/mission-utils");
const CoinEnum_1 = require("../constant/CoinEnum");
const Coin_1 = require("../../domain/Coin");
class CoinGenerator {
    constructor() { }
    ;
    generate(amount) {
        return this.generateCoin(amount, this.getNumbers());
    }
    ;
    generateCoin(amount, numbers) {
        const coinList = [];
        while (amount > 0) {
            const randomCoin = mission_utils_1.MissionUtils.Random.pickNumberInList(numbers);
            if (amount < randomCoin) {
                continue;
            }
            coinList.push(Coin_1.Coin.getAmountOfCoin(randomCoin));
            amount -= randomCoin;
        }
        ;
        return coinList;
    }
    ;
    getNumbers() {
        const numbers = [];
        for (const coin of Object.values(CoinEnum_1.CoinEnum)) {
            if (typeof coin === 'number') {
                numbers.push(coin);
            }
        }
        return numbers; // numbers [ 500, 100, 50, 10]
    }
    ;
}
exports.CoinGenerator = CoinGenerator;
;
