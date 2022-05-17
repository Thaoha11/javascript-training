import fetch from '../helpers/service'
import path from '../constant'

export default class Model {
    constructor() {
        this.todos = []
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    _commit(todos) {
        this.onTodoListChanged(todos)
        localStorage.setItem('todos', JSON.stringify(todos))

    }
    /**
     * 
     * @param {string} id
     * @param {string} todoText 
     */
    // addTodo(todoText) {
    //     const todo = {
    //         id: new Date().getTime().toString(),
    //         text: todoText,
    //         complete: false,
    //     }

    //     

    //     this._commit(this.todos)

    // }

    async addTodo(todoText) {
        await fetch.create(`/${path.PATH_TODO}`, {
            id: new Date().getTime().toString(),
            text: todoText,
            complete: false,
        })
        // this.todos.push(todo)

    }

    async getTodo() {
        const todo = await fetch.get(`/${path.PATH_TODO}`)
        console.log('todo', todo)
        return todo
    }
    /**
     * 
     * @param {string} id 
     */
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)

        this._commit(this.todos)
    }

    // Edit todo
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
        )

        this._commit(this.todos)
    }

    //Select

    toggleTodo(id) {
        this.todos.map(todo => {
            todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo

        })
        this._commit(this.todos)
    }

}




