import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, combineLatest, filter, map, of, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoId=new BehaviorSubject<number>(1);
  private todoId$=this.todoId.asObservable();

  todo$:Observable<any>;
 
  url='https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
    this.todo$=this.todoId$
      .pipe(
        switchMap((id:number)=>this.http.get(this.url+'/'+id))
      )
  }
  
  handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(()=>new Error('Something went wrong. Please try again later.'));
  }

  setTodoId(id:number){
    this.todoId.next(id);
  }
}
