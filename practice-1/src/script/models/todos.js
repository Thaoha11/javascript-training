import fetch from '../helpers/service'
import path from '../constant'

export default class Model {
    todos = []
    constructor() { }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    /**
     * Use API url from fetch import and param todoText, id from controller in add todo
     * @param {string} todoText 
     * @param {string} id 
     */

    addTodo = async (todoText) => {

        const todoAdded = {
            id: new Date().getTime().toString(),
            text: todoText,
            complete: false
        }

        await fetch.create(`/${path.PATH_TODO}`, todoAdded)
        this.todos.push(todoAdded)

        return this.todos
    }

    /**
     * Use API url from fetch import and param id from controller in delete todo
     * @param {string} id 
     */

    deleteTodo = async (id) => {
        const index = this.todos.findIndex(item => item.id === id)
        const todo = this.todos[index]

        await fetch.remove(`/${path.PATH_TODO}/${id}`, todo)
        this.todos.splice(index, 1)

        return this.todos
    }

    /**
     * Use API url from fetch import and param id from controller in update todo
     * @param {string} id 
     * @param {string} updateText 
     */
    updateTodo = async (id, updateText) => {

        const index = this.todos.findIndex(item => item.id === id)
        const todoUpdate = {
            id,
            text: updateText,
            complete: false
        }

        await fetch.update(`/${path.PATH_TODO}/${id}`, todoUpdate)
        this.todos.splice(index, 1, todoUpdate)

        return this.todos
    }

    /**
     * Use API url from fetch import and param id from controller in update todo
     * @param {*} id 
     * @param {*} complete 
     * @returns {array} todos
     */
    toggleTodo = async (id, complete) => {
        const index = this.todos.findIndex(item => item.id === id)
        const todo = this.todos[index]
        const todoUpdated = {
            id,
            text: todo.text,
            complete
        }

        this.todos.splice(index, 1, todoUpdated)
        await fetch.update(`/${path.PATH_TODO}/${id}`, todoUpdated)

        return this.todos
    }
    /**
     * Use API url from fetch import and param id from controller in update todo
     * @param {*} complete 
     * @returns {array} todos
     */
    toggleCheckAll = async (complete) => {
        this.todos.forEach(item => item.complete = complete)
        const todoUpdated = this.todos.map(e => { return { ...e, complete } })

        Promise.all(
            todoUpdated.map(async (todo) => {
                await fetch.update(`/${path.PATH_TODO}/${todo.id}`, todo)
            })
        )

        return this.todos

    }
    /**
     * Use API url from fetch import and param id from controller in update todo
     * @returns {array} todos
     */
    deleteAllTodo = async () => {
        const todoUpdated = this.todos.filter(e => e.complete === true)

        Promise.all(
            todoUpdated.map(async (todo) => {
                await fetch.remove(`/${path.PATH_TODO}/${todo.id}`, todo)
            })
        )

        const newTodos = this.todos.filter(e => e.complete !== true)
        this.todos = newTodos

        return this.todos
    }
    /**
     * Filter all todos was complete
     * @returns {array} todos
     */
    listCompleted = async () => {
        const newListCompeted = this.todos.filter(e => e.complete)
        this.todos = newListCompeted

        return this.todos
    }
    /**
     * Filter all todos are activating
     * @returns {array} todos
     */
    listActive = async () => {
        const newListActive = this.todos.filter(e => e.complete !== true)
        this.todos = newListActive

        return this.todos
    }

    /**
     * Use API url from fetch import in read data
     * @returns {array} todos.
     */
    getTodo = async () => {
        const listTodos = await fetch.get(`/${path.PATH_TODO}`)
        this.todos = listTodos
        return listTodos
    }
}
