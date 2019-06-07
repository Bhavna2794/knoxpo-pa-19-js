import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-todo-list',
  templateUrl: './user-todo-list.component.html',
  styleUrls: ['./user-todo-list.component.css']
})
export class UserTodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.newTodo = '';
    this.todos = [];
  }

  newTodo: string;
  todos: any;
  todoObj: any;

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

}
