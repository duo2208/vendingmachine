import { CoinValidator } from './../commons/validator/CoinValidator';
import { ProductValidator } from './../commons/validator/ProductValidator';
import { Parser } from './../commons/util/Parser';
import { ProductParser } from './../commons/util/ProductParser';
import { InputView } from "../view/InputView";
import { Product } from './../domain/Product';

export class InputController {
    private parser: Parser;
    private productParser: ProductParser;
    private coinValidator: CoinValidator;
    private productValidator: ProductValidator;

    constructor() {
        this.parser = new Parser();
        this.productParser = new ProductParser();
        this.coinValidator = new CoinValidator();
        this.productValidator = new ProductValidator();
    };

    public inputAmountToMachine(): number {
        try {
            const result: string = InputView.reqHavingAmount();
            this.coinValidator.isRightAmountInput(result);
            const parsedResult: number = this.parser.stringToInt(result);
            return parsedResult;
        } catch (error) {
            throw error;
        }
    };

    public inputProductToMachine(): Map<string, Product> {
        try {
            const result: string = InputView.reqHavingProdcut();
            this.productValidator.isRightProductInput(result);
            const parsedResult: Map<string, Product> = this.productParser.getProducts(result);
            return parsedResult;
        } catch (error) {
            throw error;
        }
    };

    public inputPaymentToMachine(): number {
        try {
            const result: string = InputView.reqPayment();
            this.coinValidator.isRightAmountInput(result);
            const parsedResult: number = this.parser.stringToInt(result);
            return parsedResult;
        } catch (error) {
            throw error;
        }
    }
};