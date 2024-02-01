
import { MachineController } from "./controller/MachineController";

function Application() {
	const machineController = new MachineController();
	machineController.run();
};

Application();