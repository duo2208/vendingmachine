"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinValidator = void 0;
const Validator_1 = require("./Validator");
class CoinValidator extends Validator_1.Validator {
    static amountValidator(input) {
        Validator_1.Validator.isEmpty(input);
        Validator_1.Validator.isInteger(input);
        Validator_1.Validator.isPositive(input);
    }
    ;
}
exports.CoinValidator = CoinValidator;
;
