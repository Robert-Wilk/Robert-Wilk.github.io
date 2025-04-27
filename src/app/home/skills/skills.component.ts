import { Component } from '@angular/core';
import data from "../../../assets/data/studies.json";
import { SkillSection } from './Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  urls: string[] = data;

  imageUrl: string = '';

  skillSection: SkillSection[] = [
    {
      title: 'Front-End',
      skills: [
        {
          name: 'HTML',
          url: null,
          imageName: 'html'
        },
        {
          name: 'JavaScript',
          url: null,
          imageName: 'js'
        },
        {
          name: 'TypeScript',
          url: null,
          imageName: 'typescript'
        },
        {
          name: 'React',
          url: null,
          imageName: 'react'
        },
        {
          name: 'Angular',
          url: null,
          imageName: 'angular'
        }
      ]
    },
    {
      title: 'Styling',
      skills: [
        {
          name: 'CSS',
          url: null,
          imageName: 'css'
        },
        {
          name: 'SASS',
          url: null,
          imageName: 'sass'
        },
        {
          name: 'Bootstrap',
          url: null,
          imageName: 'bootstrap'
        },
        {
          name: 'Styled-Components',
          url: null,
          imageName: 'styledcomponents'
        }
      ]
    },
    {
      title: 'Back-End',
      skills: [
        {
          name: 'C#',
          url: null,
          imageName: 'csharp'
        },
        {
          name: '.NET',
          url: null,
          imageName: 'net'
        },
        {
          name: 'Java',
          url: null,
          imageName: 'java'
        },
        {
          name: 'Spring Boot',
          url: null,
          imageName: 'springboot'
        },
        {
          name: 'Flask',
          url: null,
          imageName: 'flask'
        },
        {
          name: 'Microsoft SQL Server',
          url: null,
          imageName: 'sql'
        }
      ]
    },
    {
      title: 'AL/ML',
      skills: [
        {
          name: 'Python',
          url: null,
          imageName: 'python'
        },
        {
          name: 'Jupyter Notebook',
          url: null,
          imageName: 'jupyter'
        },
        {
          name: 'Pandas',
          url: null,
          imageName: 'pandas'
        },
        {
          name: 'Matplotlib',
          url: null,
          imageName: 'matplotlib'
        },
        {
          name: 'Scikit-learn',
          url: null,
          imageName: 'sklearn'
        },
        {
          name: 'OpenCV',
          url: null,
          imageName: 'opencv'
        },
        /*{
          name: 'PyTorch',
          url: null,
          imageName: 'pytorch'
        },*/
        {
          name: 'Selenium',
          url: null,
          imageName: 'selenium'
        }
      ]
    },
    {
      title: 'Cloud, CI/CD, and Monitoring Tools',
      skills: [
        {
          name: 'Git',
          url: null,
          imageName: 'git'
        },
        {
          name: 'Jenkins',
          url: null,
          imageName: 'jenkins'
        },
        {
          name: 'uDeploy',
          url: null,
          imageName: 'ucd'
        },
        {
          name: 'Harness',
          url: null,
          imageName: 'harness'
        },
        {
          name: 'Microsoft Azure Fundamentals Certified',
          url: 'https://www.credly.com/badges/2bfcbe83-a601-46cb-b082-dfa7b49ac1b7/linked_in_profile',
          imageName: 'azure'
        },
        {
          name: 'AppDynamics',
          url: null,
          imageName: 'appd'
        },
        {
          name: 'Elastic APM',
          url: null,
          imageName: 'elastic'
        },
        {
          name: 'Splunk',
          url: null,
          imageName: 'splunk'
        }
      ]
    },
    {
      title: 'Miscellaneous',
      skills: [
        {
          name: 'C++',
          url: null,
          imageName: 'cpp'
        },
        {
          name: 'Matlab',
          url: null,
          imageName: 'matlab'
        },
        {
          name: 'ROS',
          url: null,
          imageName: 'ros'
        }
      ]
    },
  ]

  ngOnInit(): void { }

  showImage(imageName: string): void {
    data.forEach(image => {
      if (image.includes(imageName))
        this.imageUrl = image;
    })
  }

  hideImage(): void { 
    this.imageUrl = '';
  }
}