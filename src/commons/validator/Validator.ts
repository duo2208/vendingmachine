import { getHeapStatistics } from "v8";

export class Validator {
    public static isEmpty(input: string): void {
        if (input.trim().length === 0) {
            throw new Error("[ERROR] 입력값을 입력해주세요.");
        };
    };

    public static isInteger(input: string): void {
        if (isNaN(parseInt(input))) {
            throw new Error("[ERROR] 숫자를 입력해주세요.");
        };
    };

    public static isPositive(input: string): void {
        if (parseInt(input) < 0) {
            throw new Error("[ERROR] 0 이상의 수를 입력해주세요.");
        };

        if (input.charAt(0) === '0') {
            throw new Error("[ERROR] 입력값의 첫 글자가 0입니다.");
        }
    }
};