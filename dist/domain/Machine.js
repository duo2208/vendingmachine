"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
const Coin_1 = require("./Coin");
const Product_1 = require("./Product");
class Machine {
    constructor() {
        this.coin = new Coin_1.Coin(10000);
        this.product = new Product_1.Product();
        console.log('*********** machine is running ***********');
        return;
    }
}
exports.Machine = Machine;
