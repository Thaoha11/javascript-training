export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        // Explicit this binding
        this.model.bindTodoListChanged(this.onTodoListChanged)
        this.view.bindAddTodo(this.handleAddTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindEditTodo(this.handleEditTodo)
        // Display initial todos
        this.onTodoListChanged(this.model.todos)
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

    handleEditTodo = (id, todoText) => {
        this.model.editTodo(id, todoText)
    }
}
