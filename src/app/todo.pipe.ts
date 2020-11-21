import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'filter'
})
export class TodoPipe implements PipeTransform {


  transform(items:Todo[],criteria:any): any {
   if(criteria==='all' ){
   return items
   }else
{
    return items.filter(item=>{
 return item.completed===criteria
 })}
  }

}
