import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project } from 'src/app/projects/Project';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselDataService {

  private url: string = './assets/data/projects.json';

  carouselData$ = this.http.get<Project[]>(this.url)
    .pipe(
      map(data => 
        data.map(d => (
        { 
          id: d.id,
          src: d.img,
          title: d.name,
          subtitle: d.flavorText,
          imgClass: d.imgClass,
          isDark: d.isDark
        }))
      ),
      catchError(this.handleError)
    );

  constructor(private http: HttpClient) { }

  // From: https://github.com/DeborahK/Angular-RxJS/blob/master/APM-Final/src/app/products/product.service.ts
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
