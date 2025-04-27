import { Component } from '@angular/core';
import { Work } from './Work';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  works: Work[] = [
    {
      title: 'Angle Financial',
      skillsUsed: ['MongoDB', 'Express', 'Angular', 'NodeJS', 'Bootstrap'],
      description: 'MEAN-stack online banking application for a ficitional Bank',
      imgURL: '../../../assets/media/angle-financial.png',
      route: 'projects/project/9'
    },
    {
      title: 'U.S. Currency Recognition',
      skillsUsed: ['Python', 'Jupyter Notebook', 'OpenCV', 'TensorFlow'],
      description: 'Single Shot Detector model that detects commonly used U.S. dollar bills and coins',
      imgURL: '../../../assets/media/money.png',
      route: 'projects/project/10'
    },
    {
      title: 'Mutli-Robot Collision Safety',
      skillsUsed: ['Python', 'C++', 'Matlab', 'ROS', 'CoppeliaSim', 'OptiTrack MoCap', 'Matplotlib'],
      description: 'Collision-free Coordinated Behaviors for Multi-Robot Systems in real-world and simulated environments',
      imgURL: '../../../assets/media/robots.png',
      route: 'projects/project/11'
    }
  ];

  constructor(private router: Router) { }
  
  navigateTo(index: number): void {
    this.router.navigate(['/' + this.works[index].route])
  }
}
