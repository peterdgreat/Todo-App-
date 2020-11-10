import { Injectable } from '@angular/core';
import { Todo } from './todo';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'

  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
todoUrl:string='https://jsonplaceholder.typicode.com/todos'
 todosLimit='?_limit=5'
constructor(private http:HttpClient) { }


getTodos():Observable<Todo[]>{
return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`)
  }

  toggleCompleted(todo:Todo):Observable<any>{
const url=`${this.todoUrl}/${todo.id}`
    return this.http.put(url,todo,httpOptions)
  }

 deleteTodo(todo:Todo):Observable<any>{
  const url=`${this.todoUrl}/${todo.id}`
  return this.http.delete(url,httpOptions)

 }

 addTodo(todo:Todo):Observable<Todo>{
   return  this.http.post<Todo>(this.todoUrl,todo,httpOptions)
 }
}
