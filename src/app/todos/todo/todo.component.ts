import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos:Todo[]
@Input() filterBy?:any='all'
filter
  constructor(private todoservice:TodoServiceService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(todos=>{
      this.todos=todos
      console.log(todos);

    })
  }
delete(todo:Todo){
  //UI
  //this.todos=this.todos.filter(t=>t.id !==todo.id)
//service
//this.todoservice.deleteTodo(todo).subscribe()
for(let i=0; i<this.todos.length; i++){
  if(todo===this.todos[i]){
    this.todos.splice(i,1)
  }

}
}
addTodo(todo:Todo){
  this.todoservice.addTodo(todo)

}
}
