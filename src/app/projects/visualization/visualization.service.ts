import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { VISUALIZATIONS } from 'src/assets/data/visualizations.json';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {
  
  constructor(private http: HttpClient) { }

  getVisualization(id: number) {
    return this.http.get('../../../assets/data/html/' + VISUALIZATIONS[id], {responseType: 'text'});
  }

  getName(id: number) {
    return this.http.get<Project[]>('../../../assets/data/projects.json').pipe(
      map(projects => 
        projects.filter(x => {
            if (x.isVisualization)
              return x.visualizationIndex == id;
            else
              return false;
          }
        )
      ),
      map(projects => projects[0]), // WITH ACTUAL API THIS FILTERING DOES NOT NEED TO EXIST
      tap(project => {
        if (!project)
          throw new Error('Project could not be found');
      }),
      map(project => project.name)
    );
  }
}
