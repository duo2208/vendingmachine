import { Machine } from "../domain/Machine"
import { InputController } from "./InputController";

export class MachineController {
    public run(): void {
        const machine: Machine = new Machine();
        this.initiate(machine);
        this.activate(machine);
        this.giveChanges(machine);
    };

    // 'init coin -> init products -> input coin'
    private initiate(machine: Machine): void {
        InputController.getMachineMoney();
        return;
    };

    // 'purchase products'
    private activate(machine: Machine): void {
        return;
    };

    // 'give changes'
    private giveChanges(machine: Machine): void {
        return;
    };
};