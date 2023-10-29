import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectService } from '../project.service';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { ProjectAbbrv } from '../Project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  listView = false;
  projects$ = this.projectService.projectData$;
  searchQuery$ = new BehaviorSubject<string>('');

  projectSearch = new FormGroup({
    project: new FormControl('')
  });

  filteredProjects$ = combineLatest([
    this.projects$,
    this.searchQuery$
  ])
  .pipe(
    map(([projects, searchQuery]) => 
    projects.filter(x => 
      x.title.toLowerCase().includes(searchQuery) || 
      x.subtitle.toLowerCase().includes(searchQuery)
    )),
  );

  constructor(private projectService: ProjectService) { }

  searchHandler() {
    this.searchQuery$.next(this.projectSearch.value.project ? this.projectSearch.value.project : '');
  }

  buildUrl(project: ProjectAbbrv): string {
    if (project.isViz)
      return `viz/${project.vizId}`;
    return `project/${project.id}`;
  }

  clearForm() {
    this.projectSearch.reset();
    this.searchQuery$.next('');
    this.projectSearch.value.project = '';
  }
}
