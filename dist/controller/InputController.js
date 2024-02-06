"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputController = void 0;
const CoinValiator_1 = require("./../commons/validator/CoinValiator");
const Parser_1 = require("./../commons/util/Parser");
const InputView_1 = require("../view/InputView");
class InputController {
    constructor() {
        this.parser = new Parser_1.Parser();
    }
    inputAmountToMachine() {
        try {
            const result = InputView_1.InputView.reqHavingAmount();
            CoinValiator_1.CoinValidator.amountValidator(result);
            const parsedResult = this.parser.stringToInt(result);
            return parsedResult;
        }
        catch (error) {
            throw error;
        }
    }
    ;
}
exports.InputController = InputController;
;
