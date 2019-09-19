import $ from 'jquery'
import TodoService from './TodoService';

import {
   inputTodo, btnAddTodo, todoList, todoItem
} from './constants';

function renderTodoList(list, container){
  
   container.html('');

   list.map((todo, id)=>{
      const todoComponent = todoItem(todo,id);
      container.html(container.html() + todoComponent);
   });
   $("button[data-type='status']").click((e)=>{
      const id = $(e.currentTarget).attr('data-id');
      const status = $(e.currentTarget).attr('data-status') === 'open' ? "close" : "open";
      
      renderTodoList(TodoService.changeTodo(id, status), container);
   })

   $("button[data-type='remove']").click((e)=>{
      const id = $(e.currentTarget).attr('data-id');
      renderTodoList(TodoService.removeTodo(id), container)
   })



}



$(document).ready(function(){

   btnAddTodo.click(function(e){
      const textTask = inputTodo.val();
     
     let  objTask = {
         description:textTask,
         status:'open'
      }
      renderTodoList(TodoService.addTodo(objTask), todoList);
      inputTodo.val('');
       
   })
   renderTodoList(TodoService.todoList, todoList);
});