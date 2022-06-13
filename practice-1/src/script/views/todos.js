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
        this.active = this.getElement('.active')
    }

    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }
    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)

        if (className) element.classList.add(className)

        return element
    }
    //  Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }


    displayTodos(todos) {
        if (todos.length !== 0) {

            // clean UI todo-list
            const wrapper = document.getElementsByClassName("todo-list")
            wrapper[0].innerHTML = ""

            let ishowClearText = false

            // Create nodes
            todos.forEach(todo => {

                const li = this.createElement('li')
                li.id = todo.id

                // Each todo item will have a checkbox you can toggle
                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete
                checkbox.id = li.id

                // The todo item text will be in a contenteditable span
                const span = this.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')

                // If the todo is complete, it will have a strikethrough
                if (todo.complete === true) {
                    const strike = this.createElement('s')
                    strike.textContent = todo.text
                    span.append(strike)

                    ishowClearText = true

                } else {
                    // Otherwise just display the text
                    span.textContent = todo.text
                }

                // The todos will also have a delete button
                const deleteButton = this.createElement('button', 'delete')
                deleteButton.textContent = 'x'
                li.append(checkbox, span, deleteButton)

                // Append nodes
                this.todoList.append(li)
            })

            // check completed   
            if (ishowClearText) {
                this.clearComplete.style.display = 'block'
            }
            else {
                this.clearComplete.style.display = 'none'
            }
        }
    }

    /**
     * Add event 'keyup' for element input
     * @param {function} handler 
     */
    bindAddTodo(handler) {
        this.input.addEventListener('keyup', e => {
            if (e.which === this.ENTER_KEY) {
                if (this._todoText) {
                    handler(this._todoText)
                    this._resetInput()
                }
            }
        })
    }

    /**
     * function use id to delete todos
     * Add event 'click' for todoList element
     * @param {function} handler 
     */
    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', e => {
            if (e.target.className === 'delete') {
                const id = e.target.parentElement.id
                handler(id)
            }
        })
    }
    // Update temporary state
    _initLocalListeners() {
        this.todoList.addEventListener('input', e => {
            if (e.target.className === 'editable') {
                //Save the new input value in a temporary variable    
                this._temporaryTodoText = e.target.innerText
            }
        })
    }
    /**
     * function use id to update todos
     * Add event 'focusout' for todoList element
     * @param {fuction} handler 
     */
    bindUpdateTodo(handler) {
        this.todoList.addEventListener('focusout', e => {
            if (this._temporaryTodoText) {
                const id = e.target.parentElement.id
                handler(id, this._temporaryTodoText)
                this._temporaryTodoText = ''
            }
        })
    }

    /**
     * function use param to toggle todos
     * Add event 'click' for todoList element
     * @param {string} id
     * @param {fuction} handler 
     */
    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', e => {
            if (e.target.type === 'checkbox') {
                const id = e.target.parentElement.id
                handler(id, e.target.checked)
            }
        })
    }
    /**
     * Add event 'click' to select all todos
     * @param {fuction} handler 
     */
    bindToggleCheckAll(handler) {
        this.toggleAll.addEventListener('click', e => {
            if (e.target.type === 'checkbox') {
                handler(e.target.checked)
            }

        })
    }
    /**
     * Add event 'click' to delete all todos
     * @param {fuction} handler 
     */
    bindDeleteAllTodo(handler) {
        this.clearComplete.addEventListener('click', e => {
            handler(this.todoList)

        })
    }
    /**
     * Add event 'click' to show completed todos 
     * @param {fuction} handler 
     */
    bindListCompleted(handler) {
        this.completed.addEventListener('click', e => {
            handler(this.todoList)
        })
    }

    /**
     * Add event 'click' to show inprocess todos 
     * @param {fuction} handler 
     */
    bindListActive(handler) {
        this.active.addEventListener('click', e => {
            handler(this.todoList)
        })
    }

}

