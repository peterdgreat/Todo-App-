import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
title:string
todo:Todo
@Output() addTodo:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  submit(value:Todo){

    const todo={
      title:value.title,
      completed:false
    }
    console.log(todo);

this.addTodo.emit(todo)

  }

}
