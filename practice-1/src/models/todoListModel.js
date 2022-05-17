import fetch from '../helpers/service'
import path from '../constant'

export default class Model {
    costructor() { }

    async addTodo(todoText) {
        await fetch.create(`/${path.PATH_TODO}`, {
            id: new Date().getTime().toString(),
            text: todoText,
            complete: false,
        })



    }

    async getTodo() {
        const todo = await fetch.get(`/${path.PATH_TODO}`)
        console.log(todo)
        return todo

    }

}
