import { Controller } from "./controller/Controller";
import { Machine } from "./domain/Machine";

function Application() {
	const machine = new Machine();
	const controller = new Controller(machine);
	controller.run();
};

Application();