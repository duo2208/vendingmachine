import { Validator } from "./Validator";

export class ProductValidator extends Validator {
    public isRightProductInput(input: string): void {
        Validator.isEmpty(input);
        this.isRightProducts(input);
    };

    private isRightProducts(product: string): void {
        this.isContainsBracketAndThrowException(product, product.length);
    };

    private isContainsBracketAndThrowException(product: string, length: number): void {
        if (!this.isContainsBracket(product, length)) {
			throw new Error("[ERROR] 상품 정보를 올바르게 입력해주세요.");
		}
    };

    private isContainsBracket(product:string, length: number): boolean {
        return product.indexOf('[') === 0 && product.lastIndexOf(']') === length -1;
    };
};