import { Coin } from './Coin';
import { CoinStorage } from './CoinStorage';
import { Product } from './Product';
import { ProductStorage } from './ProdcutStorage';

export class Machine {
    private coins: Coin[] = [];
    private coinStorage: CoinStorage;
    private productStorage: ProductStorage;

    constructor() {
        this.coinStorage = new CoinStorage();
        this.productStorage = new ProductStorage();
    };

    public addCoins(coins: Coin[]): void {
        this.coins.push(...coins);
    };

    public addProducts(products: Map<string, Product>): void {
        this.productStorage.addProducts(products);
    };

    public addPayment(amount: number): void {
        this.coinStorage.addPayment(amount);
    };

    public getCoins(): Map<number, number> {
        return Coin.getSortedCoinMap(this.coins)
    };

    /*
    public getReturnCoinMap(): Map<number, number> {
        return this.getCoinMap();
    };

    public getCoinMap(): Map<number, number> {
        const coinMap: Map<number, number> = Coin.getSortedCoinMap(this.coins);
        const
    };

    private getReturnCoinMap(restCoin: number): Map<number, number> {
        const coinMap: Map<number, number> = Coin.getSortedCoinMap(this.coins);
        const returnCoinMap: Map<number, number> = new Map<number, number>();

        for (const coin of coinMap.keys()) {
            restCoin = this.setReturnCoinMapByCoinAndReturnRestCoin(
                restCoin,
                coinMap,
                returnCoinMap,
                coin
            );
        }

        return returnCoinMap;
    }

    private verifyCoin(restCoin: number, coin: number, count: number) {
        return restCoin >= coin && count > 0;
    };
    */
}