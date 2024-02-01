import { SystemMessage } from './../commons/constant/SystemMessage';
import * as readLineSync from 'readline-sync';

export class InputView {
    public static resHavingCoin(): string {
        return readLineSync.question(SystemMessage.REQ_HAVING_COIN);
    }
};