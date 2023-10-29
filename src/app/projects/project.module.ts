import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { GithubBlogComponent } from './github-blog/github-blog.component';
import { VisualizationComponent } from './visualization/visualization.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectComponent,
    GithubBlogComponent,
    VisualizationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
