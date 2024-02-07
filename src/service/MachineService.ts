import { Machine } from '../domain/Machine';
import { CoinGenerator } from './../commons/util/CoinGenerator';

export class MachineService {
    private machine: Machine;
    private coinGenerator: CoinGenerator = new CoinGenerator();

    constructor(machine: Machine) {
        this.machine = machine;
    }

    public addAmountToCoinGenerator(machine: Machine, amount: number): void {
        machine.addCoins(this.coinGenerator.generate(amount));
    };

    public getMachineCoin(machine: Machine): Map<number, number> {
        return machine.getCoins();
    };

    public addProductToMachine(machine: Machine, products: Map<string, any>): void {
        machine.addProducts(products);
    };

    public addPaymentToMachine(machine: Machine, payment: number): void {
        machine.addPayment(payment);
    };
};