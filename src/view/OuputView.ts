import { SystemMessage } from '../commons/constant/SystemMessage';

export class OutputView {
    public static headHoldingCoinOfMachine(): void {
        console.log('');
        console.log(SystemMessage.INFO_HAVING_COIN);
    };

    public static resHoldingCoinOfMachine(sortedCoinMap: Map<number, number>): void {
        for (const [integer, count] of sortedCoinMap.entries()) {
            console.log(`${integer}원 - ${count}개`);
        };
    };
};