import { Component } from '@angular/core';

@Component({
  selector: 'app-doggo',
  templateUrl: './doggo.component.html',
  styleUrls: ['./doggo.component.css']
})
export class DoggoComponent {
  photos = [
    {
      url: '../../assets/media/dog/IMG_1689.JPG',
      description: 'Kane laying on the deck',
      size: 'large'
    },
    {
      url: '../../assets/media/dog/IMG_1362.JPG',
      description: 'Kane laying in the grass',
      size: 'normal'
    },
    {
      url: '../../assets/media/dog/IMG_1813.JPG',
      description: 'Kane smiling at camera',
      size: 'normal'
    },
    {
      url: '../../assets/media/dog/IMG_1925.JPG',
      description: 'Kane knawing on stick',
      size: 'large'
    },
    {
      url: '../../assets/media/dog/IMG_2079.JPG',
      description: 'Kane sitting in tall grass',
      size: 'tall'
    },
    {
      url: '../../assets/media/dog/IMG_2162.JPG',
      description: 'Kane playing tug-of-war',
      size: 'tall'
    }
  ];
}
