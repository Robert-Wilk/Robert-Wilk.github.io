import { Injectable } from '@angular/core';
import { Project, ProjectAbbrv } from './Project';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import projectsJson from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  projectDataRaw$: Observable<Project[]> = of(projectsJson as unknown as Project[]);

  projectData$: Observable<ProjectAbbrv[]> = this.projectDataRaw$.pipe(
    map(data => data.map(d => ({
      id: d.id,
      src: d.img.replace(/^\.\/\.\.\/\.\.\//, ''),
      title: d.name,
      subtitle: d.flavorText,
      date: d.date,
      isViz: d.isVisualization,
      vizId: d.visualizationIndex,
      tag: d.tag
    })))
  );

  projectsOnly$: Observable<Project[]> = this.projectDataRaw$.pipe(
    map(projects => projects.filter(p => !p.isVisualization)) 
  );
}
