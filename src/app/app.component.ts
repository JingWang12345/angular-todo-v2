import { Component } from '@angular/core';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-todo';

  constructor(public dialog: MatDialog){}

  openModal(){
   this.dialog.open(TodoAddComponent)
  }
}
