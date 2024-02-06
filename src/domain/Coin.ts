import { CoinEnum } from "../commons/constant/CoinEnum";

export class Coin {
    private readonly amount: number;

    constructor(amount: number) {
        this.amount = amount;
    };

    public getAmount(): number {
        return this.amount;
    };

    public static getAmountOfCoin(amount: number): any {
        for (const coin in CoinEnum) {
            if (!isNaN(Number(coin))) {
                const coinValue = Number(coin);
                if (coinValue === amount) {
                    return new Coin(amount);
                }
            }
        }
    };

    public static getSortedCoinMap(coinList: Coin[]): Map<number, number> {
        const coinMap: Map<number, number> = this.getCoinMap();
        this.setCoinMap(coinList, coinMap);
        return coinMap;
    };

    public static getCoinMap():  Map<number, number> {
        const coinMap = new Map<number, number>();

        // Explicitly specify the type of Object.values(CoinEnum)
        Object.values(CoinEnum as Record<keyof typeof CoinEnum, CoinEnum>).forEach((coinValue: CoinEnum) => {
            if (typeof coinValue === 'number') {
                coinMap.set(coinValue, 0);
            }
        });
        return coinMap;
    };

    public static setCoinMap(coinList: Coin[], coinMap: Map<number, number>): void {
        coinList.forEach((coin: Coin) => {
            // [!] instance를 생성하지 않는게 의미가 있음..?
            const amount = (coin instanceof Coin) ? coin.getAmount() : coin;
            coinMap.set(amount, (coinMap.get(amount) || 0) + 1);
        });
    };
};