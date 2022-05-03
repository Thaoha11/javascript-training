export default class View {
    constructor() {
        this.app = this.getElement('#root')
        this.ENTER_KEY = 13
        this.input = this.getElement('.new-todo')
        this.main = this.getElement('.main')
        this.todoList = this.getElement('ul')


    }

    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }

    createElement(tag, className) {
        const element = document.createElement(tag)

        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }

        // Show default message
        if (todos.length !== 0) {
            // Create nodes
            todos.forEach(todo => {
                const li = this.createElement('li')
                li.id = todo.id

                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete

                const span = this.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')

                if (todo.complete) {
                    const strike = this.createElement('s')
                    strike.textContent = todo.text
                    span.append(strike)
                } else {
                    span.textContent = todo.text
                }

                const deleteButton = this.createElement('button', 'delete')
                deleteButton.textContent = 'x'
                li.append(checkbox, span, deleteButton)

                // Append nodes
                this.todoList.append(li)
            })
        }

        // Debugging
        // console.log(todos)
    }


    bindAddTodo(handler) {
        this.input.addEventListener('keyup', e => {
            e.preventDefault()
            // console.log(e.which)

            if (e.which === this.ENTER_KEY) {
                if (this._todoText) {
                    handler(this._todoText)
                    this._resetInput()
                }
            }
        })
    }


}
