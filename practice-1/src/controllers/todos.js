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
        this.view.bindToggleCheckAll(this.handleToggleCheckAll)
        this.view.bindDeleteAllTodo(this.handleDeleteAllTodo)
        this.view.bindListCompleted(this.handleListCompleted)
        this.view.bindListActive(this.handleListActive)
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

    handleAddTodo = async todoText => {
        const todos = await this.model.addTodo(todoText)
        this.view.displayTodos(todos)
    }

    handleDeleteTodo = async id => {
        const todos = await this.model.deleteTodo(id)
        this.view.displayTodos(todos)

    }

    handleUpdateTodo = async (id, todoText, complete) => {
        const todos = await this.model.updateTodo(id, todoText, complete)
        this.view.displayTodos(todos)

    }
    handleToggleTodo = async (id, complete) => {
        const todos = await this.model.toggleTodo(id, complete)
        this.view.displayTodos(todos)
    }
    handleToggleCheckAll = async (complete) => {
        const todos = await this.model.toggleCheckAll(complete)
        this.view.displayTodos(todos)
    }

    handleDeleteAllTodo = async () => {
        const todos = await this.model.deleteAllTodo()
        this.view.displayTodos(todos)
    }
    handleListCompleted = async () => {
        const todos = await this.model.listCompleted()
        this.view.displayTodos(todos)
    }
    handleListActive = async () => {
        const todos = await this.model.listActive()
        this.view.displayTodos(todos)
    }
}
