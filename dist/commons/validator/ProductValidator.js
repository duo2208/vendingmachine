"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidator = void 0;
const Validator_1 = require("./Validator");
class ProductValidator extends Validator_1.Validator {
    isRightProductInput(input) {
        Validator_1.Validator.isEmpty(input);
        this.isRightProducts(input);
    }
    ;
    isRightProducts(input) {
        this.isContainsAllItemInfosAndThrowException();
        this.isContainsAllItemInfos();
        this.isContainsBracketAndThrowException();
        this.isContainsBracket();
    }
    ;
    isContainsAllItemInfosAndThrowException() {
    }
    ;
    isContainsAllItemInfos() {
    }
    ;
    isContainsBracketAndThrowException() {
    }
    ;
    isContainsBracket() {
    }
    ;
}
exports.ProductValidator = ProductValidator;
;
