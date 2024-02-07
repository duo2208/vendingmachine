import { Product } from "./Product";

export class ProductStorage {
    private readonly products: Map<string, Product> = new Map();

    public addProducts(products: Map<string, Product>): void {
        products.forEach((product, productName) => {
            this.products.set(productName, product);
        })
    };
}