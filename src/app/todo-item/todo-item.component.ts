import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() data:Todo
@Output() deleteTodo:EventEmitter<Todo>=new EventEmitter()
  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
  }
setCompleted(){
  if(this.data.completed===true){
    return "line-through"

  }
  else{
    return ""
  }

}
onToggle(todo:Todo){
  //Toggle on UI
  todo.completed=!this.data.completed
//Toggle onservice
this.todoService.toggleCompleted(todo).subscribe(todo=>console.log(todo)
)
}
onDelete(todo){
  this.deleteTodo.emit(todo)

}
}
