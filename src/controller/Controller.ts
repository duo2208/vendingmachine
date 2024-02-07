import { Machine } from "../domain/Machine"
import { MachineService } from "../service/MachineService";
import { InputController } from "./InputController";
import { OutputView } from "../view/OuputView";

export class Controller {
    private inputController: InputController;
    private machineService: MachineService;

    constructor(machine: Machine) {
        this.inputController = new InputController();
        this.machineService = new MachineService(machine);
    }

    public run(): void {
        const machine: Machine = new Machine();
        this.initAmountOfMachine(machine);
        this.initProductOfMachine(machine);
        this.inputPaymentToMachine(machine);
        this.purchaseProducts(machine);
        this.giveChanges(machine);
    };

    private initAmountOfMachine(machine: Machine): void {
        const amount = this.inputController.inputAmountToMachine();
        this.machineService.addAmountToCoinGenerator(machine, amount);
        OutputView.headHoldingCoinOfMachine();
        OutputView.resHoldingCoinOfMachine(this.machineService.getMachineCoin(machine));
    };

    private initProductOfMachine(machine: Machine): void {
        const product = this.inputController.inputProductToMachine();
        this.machineService.addProductToMachine(machine, product)
    };

    private inputPaymentToMachine(machine: Machine): void {
        const payment = this.inputController.inputPaymentToMachine();
        this.machineService.addPaymentToMachine(machine, payment);
    };

    private purchaseProducts(machine: Machine): void {

    };

    private giveChanges(machine: Machine): void {

    };
};