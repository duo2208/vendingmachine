"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputView = void 0;
const SystemMessage_1 = require("../commons/constant/SystemMessage");
class OutputView {
    static headHoldingCoinOfMachine() {
        console.log('');
        console.log(SystemMessage_1.SystemMessage.INFO_HAVING_COIN);
    }
    ;
    static resHoldingCoinOfMachine(sortedCoinMap) {
        for (const [integer, count] of sortedCoinMap.entries()) {
            console.log(`${integer}원 - ${count}개`);
        }
        ;
    }
    ;
}
exports.OutputView = OutputView;
;
