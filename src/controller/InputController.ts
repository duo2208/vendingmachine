import { CoinValidator } from './../commons/validator/CoinValiator';
import { Parser } from './../commons/util/Parser';
import { InputView } from "../view/InputView";

export class InputController {
    private parser: Parser = new Parser();

    public inputAmountToMachine(): number {
        try {
            const result: string = InputView.reqHavingAmount();
            CoinValidator.amountValidator(result);
            const parsedResult: number = this.parser.stringToInt(result);
            return parsedResult;
        } catch (error) {
            throw error;
        }
    };
};