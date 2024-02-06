import { MissionUtils } from '@woowacourse/mission-utils';
import { CoinEnum } from '../constant/CoinEnum';
import { Coin } from '../../domain/Coin';

export class CoinGenerator {
    constructor() {};

    public generate(amount: number): Coin[] {
        return this.generateCoin(amount, this.getNumbers());
    };

    private generateCoin(amount: number, numbers: number[]): Coin[] {
        const coinList: Coin[] = [];

        while (amount > 0) {
            const randomCoin: number = MissionUtils.Random.pickNumberInList(numbers);
            if (amount < randomCoin) {
                continue;
            }
            coinList.push(Coin.getAmountOfCoin(randomCoin));
            amount -= randomCoin;
        };
        return coinList;
    };

    private getNumbers(): number[] {
        const numbers: number[] = [];

        for (const coin of Object.values(CoinEnum)) {
            if (typeof coin === 'number') {
                numbers.push(coin);
            }
        }

        return numbers; // numbers [ 500, 100, 50, 10]
    };
};