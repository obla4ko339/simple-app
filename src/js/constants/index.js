import $ from 'jquery'

export const inputTodo = $("#inputTodo");
export const btnAddTodo = $("#btnAddTodo");
export const todoList = $("#todoList");


export const todoItem = (todo, id)=>`
    <li class='todo ${todo.status === 'open'?'close' : 'open'}'>
        <button data-type='status' data-id="${id}" data-status="${todo.status}">${todo.status === 'open'?'<i class="fas fa-lock"></i>' : '<i class="fas fa-lock-open"></i>'}</button>
        <span class="todo ${todo.status === 'close'?'todo-close':''}">${todo.description}</span>
        <button data-type='remove' data-id="${id}"><i class="fas fa-trash"></i></button>
    </li>
`
