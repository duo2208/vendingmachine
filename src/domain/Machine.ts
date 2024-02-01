import { CoinEnum } from '../commons/constant/CoinEnum';
import { Coin } from './Coin';
import { Product } from './Product';

export class Machine {
    private coin: Coin = new Coin(10000);
    private product: Product = new Product();

    constructor() {
        console.log('*********** machine is running ***********');
        return;
    }
}