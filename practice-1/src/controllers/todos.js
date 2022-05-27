export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        // Explicit this binding
        this.model.bindTodoListChanged(this.onTodoListChanged)
        this.view.bindAddTodo(this.handleAddTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindUpdateTodo(this.handleUpdateTodo)
        this.view.bindToggleTodo(this.handleToggleTodo)
        // Display initial todos
        this.onTodoListChanged(this.model.getTodo)
    }


    init = async () => {
        const todos = await this.model.getTodo();
        console.log("todos", todos);
        this.view.displayTodos(todos);
    }

    onTodoListChanged = todos => {
        this.view.displayTodos(todos)
    }

    handleAddTodo = todoText => {
        this.model.addTodo(todoText)

    }

    handleDeleteTodo = id => {
        this.model.deleteTodo(id)

    }

    handleUpdateTodo = (id, todoText) => {
        this.model.updateTodo(id, todoText)
    }
    handleToggleTodo = async (id, complete) => {
        const todos = await this.model.toggleTodo(id, complete)
        console.log(todos)
        this.view.displayTodos(todos)
    }

}
