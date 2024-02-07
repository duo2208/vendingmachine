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
    isRightProducts(product) {
        this.isContainsBracketAndThrowException(product, product.length);
        this.isContainsAllItemInfosAndThrowException();
    }
    ;
    isContainsAllItemInfosAndThrowException() {
    }
    ;
    isContainsAllItemInfos() {
    }
    ;
    isContainsBracketAndThrowException(product, length) {
        if (!this.isContainsBracket(product, length)) {
            throw new Error("[ERROR] 상품 정보를 올바르게 입력해주세요.");
        }
    }
    ;
    isContainsBracket(product, length) {
        return product.indexOf('[') === 0 && product.lastIndexOf(']') === length - 1;
    }
    ;
}
exports.ProductValidator = ProductValidator;
;
