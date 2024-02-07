export class Product {
    private name: string;
    private price: number;
    private quantity: number;

    constructor(name:string, price:number, quantitiy:number) {
        this.name = name;
        this.price = price;
        this.quantity = quantitiy;
    };
}