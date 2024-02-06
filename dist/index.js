"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./controller/Controller");
const Machine_1 = require("./domain/Machine");
function Application() {
    const machine = new Machine_1.Machine();
    const controller = new Controller_1.Controller(machine);
    controller.run();
}
;
Application();
