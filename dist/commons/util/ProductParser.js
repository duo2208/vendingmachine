"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductParser = void 0;
const Parser_1 = require("./Parser");
const Product_1 = require("../../domain/Product");
class ProductParser extends Parser_1.Parser {
    constructor() {
        super(...arguments);
        this.SEMI_COLON = ";";
        this.LEFT_BIG_BRACKET = "[";
        this.RIGHT_BIG_BRACKET = "]";
        this.COMMA = ",";
        this.EMPTY = "";
    }
    getProducts(input) {
        const products = new Map();
        input.split(this.SEMI_COLON).forEach((product) => {
            const processedProduct = this.removeBigBracket(product);
            this.putProductInProducts(products, processedProduct);
        });
        return products;
    }
    putProductInProducts(products, product) {
        const productInfos = product.split(this.COMMA);
        products.set(productInfos[0], new Product_1.Product(productInfos[0], parseInt(productInfos[1]), parseInt(productInfos[2])));
    }
    removeBigBracket(product) {
        let processedProduct = product.replace(this.LEFT_BIG_BRACKET, this.EMPTY);
        processedProduct = processedProduct.replace(this.RIGHT_BIG_BRACKET, this.EMPTY);
        return processedProduct;
    }
}
exports.ProductParser = ProductParser;
