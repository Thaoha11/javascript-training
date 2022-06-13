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
    }
    // Display initial todos
    init = async () => {
        const todos = await this.model.getTodo()

        this.view.displayTodos(todos)
    }

    onTodoListChanged = todos => {
        this.view.displayTodos(todos)
    }
    /**
     * Use todoText from views call to models 
     * @param {string} todoText 
     */
    handleAddTodo = async todoText => {
        const todos = await this.model.addTodo(todoText)
        this.view.displayTodos(todos)
    }

    /**
    * Use id from views call to models 
    * @param {string} id 
    */
    handleDeleteTodo = async id => {
        const todos = await this.model.deleteTodo(id)
        this.view.displayTodos(todos)

    }
    /**
     * Use param from views call to models 
     * @param {string} id 
     * @param {string} todoText 
     * @param {boolean} complete 
     */
    handleUpdateTodo = async (id, todoText, complete) => {
        const todos = await this.model.updateTodo(id, todoText, complete)
        this.view.displayTodos(todos)

    }
    /**
     * Use param from views call to models 
     * @param {string} id
     * @param {boolean} complete 
     */
    handleToggleTodo = async (id, complete) => {
        const todos = await this.model.toggleTodo(id, complete)
        this.view.displayTodos(todos)
    }
    /**
     * Use complete from views call to models 
     * @param {boolean} complete 
     */
    handleToggleCheckAll = async (complete) => {
        const todos = await this.model.toggleCheckAll(complete)
        this.view.displayTodos(todos)
    }
    // call deleteAllTodo func from models
    handleDeleteAllTodo = async () => {
        const todos = await this.model.deleteAllTodo()
        this.view.displayTodos(todos)
    }
    // call listCompleted func from models
    handleListCompleted = async () => {
        const todos = await this.model.listCompleted()
        this.view.displayTodos(todos)
    }
    // call listActive func from models
    handleListActive = async () => {
        const todos = await this.model.listActive()
        this.view.displayTodos(todos)
    }
}
