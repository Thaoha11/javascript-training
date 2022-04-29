import Controller from "./controller/TodosController";
import Model from "./models/TodosModel";
import View from "./views/TodosView";

const model = new Model(), view = new View(model);
const app = new Controller(model, view);

// app.model.addTodo('abcss')

