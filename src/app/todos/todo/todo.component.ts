import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos:Todo[]
  constructor(private todoservice:TodoServiceService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(todos=>{
      this.todos=todos
    })
  }
delete(todo:Todo){
  //UI
  this.todos=this.todos.filter(t=>t.id !==todo.id)
//service
this.todoservice.deleteTodo(todo).subscribe()

}
addTodo(todo:Todo){
  this.todoservice.addTodo(todo).subscribe(todo=>this.todos.push(todo))

}
}
