"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineService = void 0;
const CoinGenerator_1 = require("./../commons/util/CoinGenerator");
class MachineService {
    constructor(machine) {
        this.coinGenerator = new CoinGenerator_1.CoinGenerator();
        this.machine = machine;
    }
    addAmountToCoinGenerator(machine, amount) {
        machine.addCoins(this.coinGenerator.generate(amount));
    }
    ;
    getMachineCoin(machine) {
        return machine.getCoins();
    }
    ;
    addProductToMachine(machine, products) {
        machine.addProducts(products);
    }
    ;
    addPaymentToMachine(machine, payment) {
        machine.addPayment(payment);
    }
    ;
}
exports.MachineService = MachineService;
;
