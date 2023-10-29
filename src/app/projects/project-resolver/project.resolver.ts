import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ProjectResolved } from '../Project';
import { VisualizationResolved } from '../Visualization';
import { VisualizationService } from '../visualization/visualization.service';
import { ProjectService } from '../project.service';

export const projectResolver: ResolveFn<ProjectResolved> =
  (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<ProjectResolved> =>
    {
      const projectService = inject(ProjectService);
      const id = Number(route.paramMap.get('id'));

      if (isNaN(id)) {
        const message = `Project id was not a number: ${id}`;
        return of({ project: null, error: message });
      }

    return projectService.projectDataRaw$
      .pipe(
        map(projects => 
          projects.filter(x => 
            x.id == id
          )
        ),
        map(projects => projects[0]), // WITH ACTUAL API THIS FILTERING DOES NOT NEED TO EXIST
        tap(project => {
          if (!project)
            throw new Error('Project could not be found');
        }),
        map(project => ({ project, error: '' })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          return of({ project: null, error: message });
        })
      );
}

export const vizResolver: ResolveFn<VisualizationResolved> =
  (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<VisualizationResolved> =>
    {
      const visualizationService = inject(VisualizationService);

      const id = Number(route.paramMap.get('id'));

      if (isNaN(id)) {
        const message = `Visualization id was not a number: ${id}`;
        return of({ visualization: null, name: null, error: message });
      }

      var name = '';
      visualizationService.getName(id).subscribe(x => name = x);

    return visualizationService.getVisualization(id)
      .pipe(
        tap(viz => {
          if (!viz)
            throw new Error('Visualization could not be found');
        }),
        map(viz => ({ visualization: viz, name: name, error: '' })),
        catchError(error => {
          const message = `Retrieval error: ${error.message}`;
          return of({ visualization: null, name: null, error: message });
        })
      );
}

