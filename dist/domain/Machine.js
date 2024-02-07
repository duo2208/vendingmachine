"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
const Coin_1 = require("./Coin");
const CoinStorage_1 = require("./CoinStorage");
const ProdcutStorage_1 = require("./ProdcutStorage");
class Machine {
    constructor() {
        this.coins = [];
        this.coinStorage = new CoinStorage_1.CoinStorage();
        this.productStorage = new ProdcutStorage_1.ProductStorage();
    }
    ;
    addCoins(coins) {
        this.coins.push(...coins);
    }
    ;
    addProducts(products) {
        this.productStorage.addProducts(products);
    }
    ;
    addPayment(amount) {
        this.coinStorage.addPayment(amount);
    }
    ;
    getCoins() {
        return Coin_1.Coin.getSortedCoinMap(this.coins);
    }
    ;
}
exports.Machine = Machine;
