"use strict";


// Clock Section
const updateTime = () => {
    const clock = document.querySelector('.clock');
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    // am pm time format
    let amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;


    let timeString = `${hours.toString()} : ${minutes.toString()} : ${seconds.toString()} ${amPm}`;

    clock.textContent = timeString;
}

updateTime()
setInterval(updateTime, 1000)


// Todo List Section
const input = document.querySelector('.todo-input');
const todoList =  document.querySelector('.todo-list');

const addTodo = () => {
    // creating elements 
    const todoContainer = document.createElement('div');
    const todo = document.createElement('h2');
    const btnContainer = document.createElement('div');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    // adding text content
    todo.textContent = input.value;
    editBtn.textContent = 'Edit';
    delBtn.textContent = 'Delete';
    btnContainer.appendChild(editBtn)
    btnContainer.appendChild(delBtn)
    // adding classes
    todo.classList.add('todo');
    editBtn.classList.add('edit-btn')
    editBtn.classList.add('btn')
    delBtn.classList.add('del-btn')
    delBtn.classList.add('btn')
    btnContainer.classList.add('todo-btn-container')
    todoContainer.classList.add('todo-container');
    // adding functions to btns
    editBtn.onclick = editTodo
    delBtn.onclick = delteTodo
    // adding elements to container and todoList
    todoContainer.appendChild(todo);
    todoContainer.appendChild(btnContainer);
    todoList.appendChild(todoContainer)
    input.value='';
}

// when you press enter in the input field it will run addTodo()
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
})

// delete Todo
function delteTodo()  {
    let todoItem = this.parentNode
    todoItem.parentNode.remove()
}

// edit Todo
function editTodo() {
    const todoItem = this.parentNode.parentNode;
    let text = todoItem.childNodes[0]
    let editText = prompt(`Edit the Todo (${text.textContent}): `);
    if (editText !== null && editText !== "") text.textContent = editText;
};
