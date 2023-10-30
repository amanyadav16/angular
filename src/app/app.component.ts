import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { BehaviorSubject, EMPTY, Observable, combineLatest, delay, filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todo$!:Observable<any>;
  
  constructor(private todoService:TodoService){}

  ngOnInit(){
    this.todo$=this.todoService.todo$;
  }

  onButtonClick(id:any){
    this.todoService.setTodoId(id.value);
  }

}
