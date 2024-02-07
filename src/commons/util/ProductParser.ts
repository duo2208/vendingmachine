import { Parser } from "./Parser";
import { Product } from "../../domain/Product";

export class ProductParser extends Parser {
    private SEMI_COLON: string = ";";
    private LEFT_BIG_BRACKET: string = "[";
    private RIGHT_BIG_BRACKET: string = "]";
    private COMMA: string = ",";
    private EMPTY: string = "";

    public getProducts(input: string): Map<string, Product> {
        const products: Map<string, Product> = new Map();
        input.split(this.SEMI_COLON).forEach((product: string) => {
            const processedProduct: string = this.removeBigBracket(product);
            this.putProductInProducts(products, processedProduct);
        });
        return products;
    }

    private putProductInProducts(products: Map<string, Product>, product: string): void {
        const productInfos: string[] = product.split(this.COMMA);
        products.set(productInfos[0], new Product(productInfos[0], parseInt(productInfos[1]), parseInt(productInfos[2])));
    }

    public removeBigBracket(product: string): string {
        let processedProduct: string = product.replace(this.LEFT_BIG_BRACKET, this.EMPTY);
        processedProduct = processedProduct.replace(this.RIGHT_BIG_BRACKET, this.EMPTY);
        return processedProduct;
    }
}