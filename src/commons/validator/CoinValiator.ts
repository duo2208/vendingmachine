import { Validator } from "./Validator";

export class CoinValidator extends Validator {
    public static amountValidator(input: string): void {
        Validator.isEmpty(input);
        Validator.isInteger(input);
        Validator.isPositive(input);
    };
};