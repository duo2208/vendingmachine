"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineController = void 0;
const Machine_1 = require("../domain/Machine");
const InputController_1 = require("./InputController");
class MachineController {
    run() {
        const machine = new Machine_1.Machine();
        this.initiate(machine);
        this.activate(machine);
        this.giveChanges(machine);
    }
    ;
    // 'init coin -> init products -> input coin'
    initiate(machine) {
        InputController_1.InputController.getMachineMoney();
        return;
    }
    ;
    // 'purchase products'
    activate(machine) {
        return;
    }
    ;
    // 'give changes'
    giveChanges(machine) {
        return;
    }
    ;
}
exports.MachineController = MachineController;
;
