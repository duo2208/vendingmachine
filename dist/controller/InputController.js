"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputController = void 0;
const CoinValidator_1 = require("./../commons/validator/CoinValidator");
const ProductValidator_1 = require("./../commons/validator/ProductValidator");
const Parser_1 = require("./../commons/util/Parser");
const ProductParser_1 = require("./../commons/util/ProductParser");
const InputView_1 = require("../view/InputView");
class InputController {
    constructor() {
        this.parser = new Parser_1.Parser();
        this.productParser = new ProductParser_1.ProductParser();
        this.coinValidator = new CoinValidator_1.CoinValidator();
        this.productValidator = new ProductValidator_1.ProductValidator();
    }
    ;
    inputAmountToMachine() {
        try {
            const result = InputView_1.InputView.reqHavingAmount();
            this.coinValidator.isRightAmountInput(result);
            const parsedResult = this.parser.stringToInt(result);
            return parsedResult;
        }
        catch (error) {
            throw error;
        }
    }
    ;
    inputProductToMachine() {
        try {
            const result = InputView_1.InputView.reqHavingProdcut();
            this.productValidator.isRightProductInput(result);
            const parsedResult = this.productParser.getProducts(result);
            return parsedResult;
        }
        catch (error) {
            throw error;
        }
    }
    ;
    inputPaymentToMachine() {
        try {
            const result = InputView_1.InputView.reqPayment();
            this.coinValidator.isRightAmountInput(result);
            const parsedResult = this.parser.stringToInt(result);
            return parsedResult;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.InputController = InputController;
;
