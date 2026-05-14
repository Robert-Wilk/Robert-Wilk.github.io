import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { ProjectService } from '../project-service';
import { ProjectAbbrv } from '../Project';

type ViewMode = 'list' | 'grid';

@Component({
  selector: 'app-projects-list',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.css',
})
export class ProjectsList {
  private projectService = inject(ProjectService);

  viewMode = signal<ViewMode>('list');
  activeCategory = signal<string>('All');

  projectSearch = new FormGroup({ project: new FormControl('') });
  searchQuery$ = new BehaviorSubject<string>('');

  private filteredProjects$ = combineLatest([
    this.projectService.projectData$,
    this.searchQuery$,
  ]).pipe(
    map(([projects, q]) =>
      projects.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q)
      )
    )
  );

  projects = toSignal(this.filteredProjects$, { initialValue: [] as ProjectAbbrv[] });

  readonly categories = ['All', 'Web', 'AI & ML', 'Robotics', 'Visualization'];

  filteredByCategory = computed(() => {
    const cat = this.activeCategory();
    const all = this.projects();
    return cat === 'All' ? all : all.filter((p) => p.tag === cat);
  });

  padIndex(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  isFeatured(i: number): boolean {
    return i % 5 === 0 || i % 5 === 3;
  }

  buildUrl(project: ProjectAbbrv): string {
    return project.isViz ? `viz/${project.vizId}` : `project/${project.id}`;
  }

  searchHandler() {
    this.searchQuery$.next(this.projectSearch.value.project?.toLowerCase() ?? '');
  }

  clearSearch() {
    this.projectSearch.reset();
    this.searchQuery$.next('');
  }

  popRow(event: MouseEvent) {
    const row = (event.currentTarget as HTMLElement);
    row.classList.remove('popped');
    void row.offsetWidth;
    row.classList.add('popped');
    row.addEventListener('animationend', () => row.classList.remove('popped'), { once: true });
  }

  popCard(event: MouseEvent) {
    const card = (event.currentTarget as HTMLElement);
    card.classList.remove('popped');
    void card.offsetWidth;
    card.classList.add('popped');
    card.addEventListener('animationend', () => card.classList.remove('popped'), { once: true });
  }
}