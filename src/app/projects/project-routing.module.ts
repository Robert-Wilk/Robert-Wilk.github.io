import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { RoutingTitleStrategy } from '../shared/routing-title-strategy';
import { GithubBlogComponent } from './github-blog/github-blog.component';
import { VisualizationComponent } from './visualization/visualization.component';

import { projectResolver, vizResolver } from './project-resolver/project.resolver';

const routes: Routes = [
  {
    path: '',
    title: 'Projects',
    component: ProjectListComponent,
  },
  {
    path: ':id',
    title: '',
    redirectTo: 'project/:id'
  },
  {
    path: 'project/:id',
    title: '',
    component: ProjectComponent,
    resolve: { resolvedData: projectResolver }
  },
  {
    path: 'viz/0',
    title: 'GitHub Visualization',
    component: GithubBlogComponent,
    pathMatch: 'full'
  },
  {
    path: 'viz/:id',
    title: '',
    component: VisualizationComponent,
    resolve: { resolvedData: vizResolver }
  },
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: RoutingTitleStrategy},
  ]
})
export class ProjectRoutingModule { }