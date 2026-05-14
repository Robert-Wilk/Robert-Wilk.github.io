import { Injectable } from '@angular/core';
import { concatMap, filter, map, Observable, of } from 'rxjs';
import { VISUALIZATIONS } from '../../assets/data/visualizations.json';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './project-service';

@Injectable({
  providedIn: 'root',
})
export class VisualizationService  {

  constructor(private http: HttpClient, private projectService: ProjectService) { }

  getVisualizationData(id: number): Observable<string | null> {
    return this.projectService.projectData$.pipe(
      concatMap(projects => of(projects.filter(p => p.vizId === id))),  
      filter((projects) => {
        return projects.find(p => p.vizId === id)?.isViz ?? false;
      }),
      map(projects => {
        const vizId = projects.length > 0 ? projects[0].vizId ?? -1 : -1;
        return vizId !== -1 ? this.http.get('../../../assets/data/html/' + VISUALIZATIONS[vizId], {responseType: 'text'}) : of(null);
      }),
      concatMap(obs => obs)
    );
  }
}
