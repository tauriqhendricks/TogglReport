import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpOptions } from '../shared/models/http-options.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected actionUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  public baseGet(url: string, httpOptions: HttpOptions): Observable<any> {

    return this.http.get(
      `${this.actionUrl}/${url}`,
      httpOptions
    ).pipe(catchError(this.handleError));
// .pipe(tap(),
  }

  public handleError(err: any) {
    if (err.status === 500) {
      return throwError(err);
    }

    if (err.status === 400) {
      return throwError(err.error);
    }

    return throwError(err);
  }

}
