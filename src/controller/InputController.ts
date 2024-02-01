import { InputView } from "../view/InputView";

export class InputController {
    public static getMachineMoney(): void {
        try {
            const test = InputView.reqHavingAmount();
            // console.log('자판기가 보유하고 있는 금액: ', test);
        } catch {
            return;
        }
    };
};