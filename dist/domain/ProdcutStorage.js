"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStorage = void 0;
class ProductStorage {
    constructor() {
        this.products = new Map();
    }
    addProducts(products) {
        products.forEach((product, productName) => {
            this.products.set(productName, product);
        });
    }
    ;
}
exports.ProductStorage = ProductStorage;
