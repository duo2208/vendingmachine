import { SystemMessage } from './../commons/constant/SystemMessage';
import * as readLineSync from 'readline-sync';

export class InputView {
    public static reqHavingAmount(): string {
        return readLineSync.question(SystemMessage.REQ_HAVING_COIN);
    }

    public static reqHavingProdcut(): string {
        return readLineSync.question(SystemMessage.REQ_HAVING_PRODUCT);
    }

    public static reqPayment(): string {
        return readLineSync.question(SystemMessage.REQ_PAYMENT);
    }

    public static reqSelectedProduct(): string {
        return readLineSync.question(SystemMessage.REQ_SELECTED_PRODUCT);
    }
};