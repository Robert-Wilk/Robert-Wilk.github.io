import { Component } from '@angular/core';

const PREFIX = 'assets/icons/';

@Component({
  selector: 'app-about-studies',
  templateUrl: './about-studies.component.html',
  styleUrls: ['./about-studies.component.css']
})
export class AboutStudiesComponent {

  interests = [
    {
      title: 'Artificial Intelligence',
      desc: 'I am learning the basics of machine learning, computer vision, and data science algorithms using Juypter Notebooks inside Google Collab!',
      icon: PREFIX + 'brain.svg'
    },
    {
      title: 'Full-Stack',
      desc: 'I am currently working on projects using a variety of frameworks and languages! I am mainly focused on Angular, .NET, and deploying to Azure',
      icon: PREFIX + 'web.svg'
    },
    {
      title: 'Robotics',
      desc: 'I like learning about the algorithms and theory behind modern robotics! Occassionally, I like to build small robots using leftover sensors and microcontrollers',
      icon: PREFIX + 'robot.svg'
    },
  ]
}
