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
      description: 'Mountain landscape',
      size: 'large'
    },
    {
      url: '../../assets/media/dog/IMG_1362.JPG',
      description: 'Lake view',
      size: 'normal'
    },
    {
      url: '../../assets/media/dog/IMG_1813.JPG',
      description: 'Lake view',
      size: 'normal'
    },
    {
      url: '../../assets/media/dog/IMG_1925.JPG',
      description: 'Beach sunset',
      size: 'large'
    },
    {
      url: '../../assets/media/dog/IMG_2079.JPG',
      description: 'Forest pathway',
      size: 'tall'
    },
    {
      url: '../../assets/media/dog/IMG_2162.JPG',
      description: 'City lights',
      size: 'tall'
    }
  ];
}
