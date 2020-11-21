import { Injectable } from '@angular/core';
import { Todo } from './todo';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import {v4 as uuidv4} from 'uuid'

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
//working with the service  return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`)
let subject=new Subject<Todo[]>()
setTimeout(()=>{
  subject.next(todo);
  subject.complete();

},100)

return subject
}

//with service
 // toggleCompleted(todo:Todo):Observable<any>{
//const url=`${this.todoUrl}/${todo.id}`
  //  return this.http.put(url,todo,httpOptions)

//}

 deleteTodo(todo:Todo):Observable<any>{
  const url=`${this.todoUrl}/${todo.id}`
  return this.http.delete(url,httpOptions)

 }

 addTodo(todos:Todo){
  const myId=uuidv4()
  //with service return  this.http.post<Todo>(this.todoUrl,todo,httpOptions)
todos.id=myId
todo.push(todos)
}
}

const todo:Todo[]=[

{
  id :1,
  title:"Work some math",
  completed:false
},
{
  id :2,
  title:"Go to the market",
  completed:true
},
{
  id :3,
  title:"Be at the restaurant",
  completed:false
},
{
  id :4,
  title:"Be at the football field",
  completed:true
}
]
