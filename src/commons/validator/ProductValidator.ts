import { Validator } from "./Validator";

export class ProductValidator extends Validator {
    public isRightProductInput(input: string): void {
        Validator.isEmpty(input);
        this.isRightProducts(input);
    };

    private isRightProducts(input: string): void {
        this.isContainsAllItemInfosAndThrowException();
        this.isContainsAllItemInfos();
        this.isContainsBracketAndThrowException();
        this.isContainsBracket();
    };

    private isContainsAllItemInfosAndThrowException(): void {

    };

    private isContainsAllItemInfos(): void {

    };

    private isContainsBracketAndThrowException():void {

    };

    private isContainsBracket():void {

    };
};