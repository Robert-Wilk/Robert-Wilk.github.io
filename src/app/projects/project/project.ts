import { Component, OnInit, inject, input, computed } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../project-service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent implements OnInit {
  id = input<string>();

  private location = inject(Location);
  private router = inject(Router);
  private projectService = inject(ProjectService);

  private allProjects = toSignal(this.projectService.projectDataRaw$, { initialValue: [] });

  project = computed(() => {
    const id = Number(this.id());
    return this.allProjects().find(p => p.id === id) ?? null;
  });

  private readonly categoryMap: Record<number, string> = {
    0: 'Web', 2: 'Web', 3: 'Web', 9: 'Web',
    1: 'Robotics', 11: 'Robotics',
    4: 'AI & ML', 10: 'AI & ML',
    5: 'Visualization', 6: 'Visualization', 7: 'Visualization', 8: 'Visualization',
  };

  category = computed(() => this.categoryMap[Number(this.id())] ?? 'Other');

  padId = computed(() => String(Number(this.id()) + 1).padStart(2, '0'));

  ngOnInit(): void {
    if (this.project()?.isVisualization)
      this.router.navigate(['projects', 'viz', this.project()!.visualizationIndex]);
  }

  back(): void {
    this.location.back();
  }
}