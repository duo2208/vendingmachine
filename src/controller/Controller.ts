import { Machine } from "../domain/Machine"
import { MachineService } from "../service/MachineService";
import { InputController } from "./InputController";
import { OutputView } from "../view/OuputView";

export class Controller {
    inputController: InputController;
    machineService: MachineService;

    constructor(machine: Machine) {
        this.inputController = new InputController();
        this.machineService = new MachineService(machine);
    }

    public run(): void {
        const machine: Machine = new Machine();
        this.initAmountOfMachine(machine);
        this.initProduct(machine);
        this.activate(machine);
        this.giveChanges(machine);
    };

    private initAmountOfMachine(machine: Machine): void {
        const amount = this.inputController.inputAmountToMachine();
        this.machineService.addAmountToCoinGenerator(machine, amount);
        OutputView.headHoldingCoinOfMachine();
        OutputView.resHoldingCoinOfMachine(this.machineService.getMachineCoin(machine));
    };

    private initProduct(machine: Machine): void {

    };

    private activate(machine: Machine): void {

    };

    private giveChanges(machine: Machine): void {

    };
};