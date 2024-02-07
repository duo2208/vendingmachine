import { Coin } from "./Coin";

export class CoinStorage {
    private inputCoinAmount: number = 0;

    public addPayment(amount: number): void {
		this.inputCoinAmount += amount;
	}
}