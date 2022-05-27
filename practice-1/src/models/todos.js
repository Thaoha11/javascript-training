import fetch from '../helpers/service'
import path from '../constant'

export default class Model {
    todos = []
    constructor() {
        this.todos = []
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    /**
     * Use API url from fetch import and param todoText, id from controller in add todo
     * @param {string} todoText 
     * @param {string} id 
     */

    addTodo = async (todoText) => {
        await fetch.create(`/${path.PATH_TODO}`, {
            id: new Date().getTime().toString(),
            text: todoText,
            complete: false,
        })
    }

    /**
     * Use API url from fetch import and param id from controller in delete todo
     * @param {string} id 
     */

    deleteTodo = async (id) => {
        await fetch.remove(`/${path.PATH_TODO}/${id}`)

    }

    /**
     * Use API url from fetch import and param id from controller in update todo
     * @param {string} id 
     * @param {string} updateText 
     */
    updateTodo = async (id, updateText) => {
        await fetch.update(`/${path.PATH_TODO}/${id}`, {
            id: id,
            text: updateText,
        })
    }

    toggleTodo = async (id, complete, todoText) => {
        await fetch.update(`/${path.PATH_TODO}/${id}`, {
            id: id,
            text: todoText,
            complete: !complete
        })
    }

    /**
   * Use API url from fetch import in read data
   * @returns {array} todos.
   */
    getTodo = async () => {
        const todo = await fetch.get(`/${path.PATH_TODO}`)
        this.todos = todo;
        console.log("todos", this.todos)
        return todo
    }
}
