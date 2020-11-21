import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';
//import {UUID} from 'angular-uuid'
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
title:string
uuidValue:string
todo:Todo
@Output() addTodo:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  submit(value:Todo){
const myId=uuidv4()
    const todo={

      id:myId,
      title:value.title,
      completed:false

    }
    console.log(todo);

this.addTodo.emit(todo)

  }


}
