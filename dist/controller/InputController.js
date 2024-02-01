"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputController = void 0;
const InputView_1 = require("../view/InputView");
class InputController {
    static getMachineMoney() {
        try {
            const test = InputView_1.InputView.reqHavingAmount();
            console.log('자판기가 보유하고 있는 금액: ', test);
        }
        catch (_a) {
            return;
        }
    }
    ;
}
exports.InputController = InputController;
;
