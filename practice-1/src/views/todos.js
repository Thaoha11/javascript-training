export default class View {
    constructor() {
        this.app = this.getElement('#root')
        this.ENTER_KEY = 13
        this.input = this.getElement('.new-todo')
        this.main = this.getElement('.main')
        this.todoList = this.getElement('.todo-list')
        this.clearComplete = this.getElement('.clear-completed')

        this.toggleAll = this.getElement('#toggle-all')

        this._temporaryTodoText = ''
        this._initLocalListeners()
        this.completed = this.getElement('.completed')
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
        if (todos.length !== 0) {

            // clean UI todo-list
            const wrapper = document.getElementsByClassName("todo-list")
            wrapper[0].innerHTML = ""
            // console.log('wrapper', wrapper)
            let ishowClearText = false

            // Create nodes
            todos.forEach(todo => {

                const li = this.createElement('li')
                li.id = todo.id

                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete
                checkbox.id = li.id


                const span = this.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')


                if (todo.complete === true) {
                    const strike = this.createElement('s')
                    strike.textContent = todo.text
                    span.append(strike)

                    ishowClearText = true

                } else {
                    span.textContent = todo.text
                }
                // toggleAll

                const deleteButton = this.createElement('button', 'delete')
                deleteButton.textContent = 'x'
                li.append(checkbox, span, deleteButton)

                // Append nodes
                this.todoList.append(li)
            })
            if (ishowClearText) {
                this.clearComplete.style.display = 'block'
            }
            else {
                this.clearComplete.style.display = 'none'
            }
        }


    }


    bindAddTodo(handleAddTodo) {
        this.input.addEventListener('keyup', e => {

            if (e.which === this.ENTER_KEY) {
                if (this._todoText) {
                    handleAddTodo(this._todoText)
                    this._resetInput()
                }

            }

        })

    }



    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', e => {
            // console.log(e)
            if (e.target.className === 'delete') {

                const id = e.target.parentElement.id
                handler(id)
            }

        })
    }

    _initLocalListeners() {
        this.todoList.addEventListener('input', e => {
            if (e.target.className === 'editable') {
                //Save the new input value in a temporary variable    
                this._temporaryTodoText = e.target.innerText
            }
        })
    }


    bindUpdateTodo(handler) {
        this.todoList.addEventListener('focusout', e => {
            if (this._temporaryTodoText) {
                const id = e.target.parentElement.id

                handler(id, this._temporaryTodoText)
                this._temporaryTodoText = ''
            }
        })

    }

    bindToggleTodo(handler) {

        this.todoList.addEventListener('change', e => {

            if (e.target.type === 'checkbox') {

                const id = e.target.parentElement.id

                handler(id, e.target.checked)

            }

        })

    }

    bindToggleCheckAll(handler) {
        this.toggleAll.addEventListener('click', e => {

            if (e.target.type === 'checkbox') {
                // const id = e.target.parentElement.id
                handler(e.target.checked)

            }

        })
    }

    bindDeleteAllTodo(handler) {
        this.clearComplete.addEventListener('click', e => {
            // this.todoList.innerHTML = ''
            handler(this.todoList)

        })
    }

    bindListCompleted(handler) {
        this.completed.addEventListener('click', e => {

            handler(this.todoList)
        })
    }
}

