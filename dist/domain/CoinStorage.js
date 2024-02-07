"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinStorage = void 0;
class CoinStorage {
    constructor() {
        this.inputCoinAmount = 0;
    }
    addPayment(amount) {
        this.inputCoinAmount += amount;
    }
}
exports.CoinStorage = CoinStorage;
