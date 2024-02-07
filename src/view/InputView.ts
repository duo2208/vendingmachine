import { SystemMessage } from '../commons/constant/SystemMessage';
import * as readLineSync from 'readline-sync';

export class InputView {
    public static reqHavingAmount(): string {
        return readLineSync.question(SystemMessage.REQ_HAVING_COIN);
    }

    public static reqHavingProdcut(): string {
        console.log('');
        return readLineSync.question(SystemMessage.REQ_HAVING_PRODUCT);
    }

    public static reqPayment(): string {
        console.log('');
        return readLineSync.question(SystemMessage.REQ_PAYMENT);
    }

    public static reqSelectedProduct(): string {
        console.log('');
        return readLineSync.question(SystemMessage.REQ_SELECTED_PRODUCT);
    }
};