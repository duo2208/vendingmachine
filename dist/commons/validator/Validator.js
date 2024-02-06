"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static isEmpty(input) {
        if (input.trim().length === 0) {
            throw new Error("[ERROR] 입력값을 입력해주세요.");
        }
        ;
    }
    ;
    static isInteger(input) {
        if (isNaN(parseInt(input))) {
            throw new Error("[ERROR] 숫자를 입력해주세요.");
        }
        ;
    }
    ;
    static isPositive(input) {
        if (parseInt(input) < 0) {
            throw new Error("[ERROR] 0 이상의 수를 입력해주세요.");
        }
        ;
        if (input.charAt(0) === '0') {
            throw new Error("[ERROR] 입력값의 첫 글자가 0입니다.");
        }
    }
}
exports.Validator = Validator;
;
