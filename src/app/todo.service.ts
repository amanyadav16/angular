import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url='https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  todos$ = this.http.get(this.url)
    .pipe(
      catchError(this.handleError),
      tap(data => console.log(data))
    )

  handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(()=>new Error('Something went wrong. Please try again later.'));
  }
}
