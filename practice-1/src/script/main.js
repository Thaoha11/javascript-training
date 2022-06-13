import Controller from "./controllers/todos";
import Model from "./models/todos";
import View from "./views/todos";


const controller = new Controller(new Model(), new View());

controller.init()


