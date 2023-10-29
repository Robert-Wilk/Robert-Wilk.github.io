import { Component, OnInit } from '@angular/core';
import { ProjectResolved } from '../Project';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  resolvedData: ProjectResolved = this.route.snapshot.data['resolvedData'];
  project = this.resolvedData.project;
  errorMessage = this.resolvedData.error;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit(): void {
    if (this.project?.isVisualization)
      this.router.navigate(['projects', 'viz', this.project.visualizationIndex]);
  }

  back(): void {
    this.location.back();
  }
}
