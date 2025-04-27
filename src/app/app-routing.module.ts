import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { RoutingTitleStrategy } from './shared/routing-title-strategy';

const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    data: { preload: true },
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    title: 'About',
    data: { preload: false },
    loadChildren: () =>
      import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'projects',
    data: { preload: false },
    loadChildren: () =>
      import('./projects/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'Portfolio',
    redirectTo: 'projects'
  },
  {
    path: 'contact',
    title: 'Contact',
    data: { preload: false },
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'email',
    title: 'Email',
    data: { preload: false },
    loadChildren: () =>
      import('./email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'doggo',
    title: 'Kane the German Shepard',
    data: { preload: false },
    loadChildren: () =>
      import('./doggo/doggo.module').then(m => m.DoggoModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: RoutingTitleStrategy},
  ]
})
export class AppRoutingModule { }