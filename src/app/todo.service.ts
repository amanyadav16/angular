import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, combineLatest, filter, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoId=new BehaviorSubject<number>(1);
  private todoId$=this.todoId.asObservable();

  todo$:Observable<any>;
 
  
  url='https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
    this.todo$=combineLatest([this.todoId$,this.todos$])
    .pipe(
      map(([id,todo]:[number,any])=>{
      return todo.filter((item:any)=>item.id==id)[0];
      }),
    )
  }

  todos$ = this.http.get(this.url)
    .pipe(
      map(data=>data),
      catchError(this.handleError)
    )
  
  handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(()=>new Error('Something went wrong. Please try again later.'));
  }

  setTodoId(id:number){
    this.todoId.next(id);
  }
}
