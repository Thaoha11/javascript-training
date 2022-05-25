export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        // Explicit this binding
        this.model.bindTodoListChanged(this.onTodoListChanged)
        this.view.bindAddTodo(this.handleAddTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindUpdateTodo(this.handleUpdateTodo)
        // this.view.bindToggleTodo(this.handleToggleTodo)
        // Display initial todos
        this.onTodoListChanged(this.model.getTodo)
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
    // handleToggleTodo = id => {
    //     this.model.toggleTodo(id)
    // }

}
