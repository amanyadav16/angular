import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { EMPTY, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoData$:Observable<any>=of(null);
  
  constructor(private todoService:TodoService){}

  ngOnInit(){
    this.todoData$ = this.todoService.todos$;
  }
}
