import { Validator } from "./Validator";

export class CoinValidator extends Validator {
    public isRightAmountInput(input: string): void {
        Validator.isEmpty(input);
        Validator.isInteger(input);
        Validator.isPositive(input);
    };
};