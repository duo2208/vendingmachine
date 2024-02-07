"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const Machine_1 = require("../domain/Machine");
const MachineService_1 = require("../service/MachineService");
const InputController_1 = require("./InputController");
const OuputView_1 = require("../view/OuputView");
class Controller {
    constructor(machine) {
        this.inputController = new InputController_1.InputController();
        this.machineService = new MachineService_1.MachineService(machine);
    }
    run() {
        const machine = new Machine_1.Machine();
        this.initAmountOfMachine(machine);
        this.initProductOfMachine(machine);
        this.inputPaymentToMachine(machine);
        this.purchaseProducts(machine);
        this.giveChanges(machine);
    }
    ;
    initAmountOfMachine(machine) {
        const amount = this.inputController.inputAmountToMachine();
        this.machineService.addAmountToCoinGenerator(machine, amount);
        OuputView_1.OutputView.headHoldingCoinOfMachine();
        OuputView_1.OutputView.resHoldingCoinOfMachine(this.machineService.getMachineCoin(machine));
    }
    ;
    initProductOfMachine(machine) {
        const product = this.inputController.inputProductToMachine();
        this.machineService.addProductToMachine(machine, product);
    }
    ;
    inputPaymentToMachine(machine) {
        const payment = this.inputController.inputPaymentToMachine();
        this.machineService.addPaymentToMachine(machine, payment);
    }
    ;
    purchaseProducts(machine) {
    }
    ;
    giveChanges(machine) {
    }
    ;
}
exports.Controller = Controller;
;
