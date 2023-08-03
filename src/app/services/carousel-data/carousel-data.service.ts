import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/shared/Project';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselDataService {

  private carouselData: any = [];
  private url: string = './assets/data/projects.json';

  constructor(private http: HttpClient) { }

  get(): any {
    return this.http.get<Project[]>(this.url)
    .pipe(
      map(data => 
        data.map(d => (
          { 
            id: d.id,
            src: d.img,
            title: d.name,
            subtitle: d.flavorText
          })
        )
      ),
      tap(data => this.carouselData = data),
    )
  }
}
