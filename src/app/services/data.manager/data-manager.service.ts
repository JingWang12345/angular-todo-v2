import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  todos: Todo[];

  constructor() {

 this.todos = [
    {
      title: 'Regalo alla Nonna',
      description: 'compra il profumo che le piace tanto',
      priority: 3
    },
    {
      title: 'compra il pane',
      priority: 1
    }
  ];
}


addTodo(todo: Todo){
  this.todos.push(todo);
}

deleteTodo(todoToDelete: Todo){
  console.log('Devo cancellare', todoToDelete.title);
 this.todos = this.todos.filter(todo => todo.title !== todoToDelete.title);
}
}
