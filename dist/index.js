"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MachineController_1 = require("./controller/MachineController");
function Application() {
    const machineController = new MachineController_1.MachineController();
    machineController.run();
}
;
Application();
