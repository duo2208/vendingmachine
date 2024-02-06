
import { Coin } from './Coin';
import { Product } from './Product';

export class Machine {
    private coins: Coin[] = [];
    private items: Product[] = [];

    constructor() {
        return;
    };

    public setCoins(coins: Coin[]): void {
        this.coins.push(...coins);
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
    */

    private verifyCoin(restCoin: number, coin: number, count: number) {
        return restCoin >= coin && count > 0;
    };

}