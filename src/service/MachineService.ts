import { Machine } from '../domain/Machine';
import { CoinGenerator } from './../commons/util/CoinGenerator';

export class MachineService {
    private machine: Machine;
    private coinGenerator: CoinGenerator = new CoinGenerator();

    constructor(machine: Machine) {
        this.machine = machine;
    }

    public addAmountToCoinGenerator(machine: Machine, amount: number): void {
        machine.setCoins(this.coinGenerator.generate(amount));
    };

    public getMachineCoin(machine: Machine): Map<number, number> {
        return machine.getCoins();
    };
};