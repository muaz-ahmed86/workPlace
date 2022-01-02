//Selectors
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let filterOption = document.querySelector('.filter-todo');

let options = {
    all: function(todo) {
        todo.style.display = 'flex';
    },
    completed: function(todo) {
        if(todo.classList.contains('completed')) {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    }, 
    uncompleted: function(todo) {
        if(!todo.classList.contains('completed')) {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    }
}

// console.log(todoButton, todoInput, todoList);

//addEventListener
document.addEventListener('DOMContentLoaded', getTodos);

todoButton.addEventListener('click', createTodo);
todoList.addEventListener('click', modifyTodo);
filterOption.addEventListener('click', createFilter);

//Functions
function createTodo(e) {
    e.preventDefault();
    let todoDiv = document.createElement('div');
    todoDiv.className = 'todo';
    todoList.appendChild(todoDiv);

    let btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    let newTodo = document.createElement('li');
    newTodo.className = 'item';
    newTodo.innerHTML = todoInput.value;
    // todoDiv.appendChild(newTodo);
    appendElement(todoDiv, [newTodo, btnContainer]);

    //Add todo to local storage
    saveLocalTodos(todoInput.value)

    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    // todoDiv.appendChild(completedButton);

    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    // todoDiv.appendChild(trashButton);

    appendElement(btnContainer, [completedButton, trashButton]);
    todoInput.value = '';
}

function modifyTodo(e) {
    let item = e.target;
    if (item.classList[0] === 'trash-btn') {
        let todo = (item.parentElement).parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo)
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }
    if (item.className === 'complete-btn') {
        let todo = (item.parentElement).parentElement;
        todo.classList.toggle('completed')
    }
}

function createFilter(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        options[e.target.value](todo)
    })

    //trying using switch case:-


    // const todos = todoList.childNodes;
    // todos.forEach(function(todo) {
    //     switch(e.target.value) {
    //         case "all":
    //             todo.style.display = 'flex';
    //             break;
    //         case "completed":
    //             if(todo.classList.contains('completed')) {
    //                 todo.style.display = 'flex';
    //             } else {
    //                 todo.style.display = 'none';
    //             }
    //             break;
    //         case "uncompleted":
    //             if(!todo.classList.contains('completed')) {
    //                 todo.style.display = 'flex';
    //             } else {
    //                 todo.style.display = 'none';
    //             }
    //             break;
    //     }
    // })  
}

function appendElement(parent, [...childs]) {
    [...childs].forEach(child => parent.appendChild(child));    
}

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo) {
        let todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        todoList.appendChild(todoDiv);

        let btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        let newTodo = document.createElement('li');
        newTodo.className = 'item';
        newTodo.innerHTML = todo;
        // todoDiv.appendChild(newTodo);
        appendElement(todoDiv, [newTodo, btnContainer]);

        let completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        // todoDiv.appendChild(completedButton);

        let trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        // todoDiv.appendChild(trashButton);

        appendElement(btnContainer, [completedButton, trashButton]);
        })
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    let todoIndex = todos.indexOf(todo.children[0].innerHTML);
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos))
}
