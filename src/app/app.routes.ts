import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
	{ 
		path: 'home', 
		title: 'Home', 
		loadComponent: () => import('./home/home').then(m => m.Home) 
	},
	{ 
		path: 'about', 
		title: 'About', 
		loadComponent: () => import('./about/about').then(m => m.About) 
	},
	{
		path: 'projects',
		loadComponent: () => import('./projects/projects-shell').then(m => m.ProjectsShell),
		children: [
			{
				path: '',
				title: 'Projects',
				loadComponent: () => import('./projects/project-list/projects-list').then(m => m.ProjectsList),
			},
			{
				path: ':id',
				redirectTo: 'project/:id'
			},
			{
				path: 'project/:id',
				title: 'Project',
				loadComponent: () => import('./projects/project/project').then(m => m.ProjectComponent),
			},
			{
				path: 'viz/0',
				title: 'Visualization',
				loadComponent: () => import('./projects/github-blog/github-blog').then(m => m.GithubBlog),
			},
			{
				path: 'viz/:id',
				title: 'Visualization',
				loadComponent: () => import('./projects/visualization/visualization').then(m => m.Visualization),
			},
		]
	},
	{ 
		path: 'contact', 
		title: 'Contact', 
		loadComponent: () => import('./contact/contact').then(m => m.Contact) 
	},
	{
		path: 'doggo',
		title: 'Doggo',
		loadComponent: () => import('./dog/dog').then(m => m.Dog)
	},
	{
		path: 'kitty-cat',
		title: 'Kitty Cat',
		loadComponent: () => import('./cat/cat').then(m => m.Cat)
	},
	{
		path: '', 
		title: 'Home', 
		loadComponent: () => import('./home/home').then(m => m.Home) 
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
