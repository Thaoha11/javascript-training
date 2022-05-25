import Controller from "./controllers/todos";
import Model from "./models/todos";
import View from "./views/todos";

const model = new Model(), view = new View(model);
const app = new Controller(model, view);

// app.model.addTodo('abcss')

