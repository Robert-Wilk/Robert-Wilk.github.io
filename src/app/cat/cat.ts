import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cat',
  imports: [CommonModule],
  templateUrl: './cat.html',
  styleUrl: './cat.css',
})
export class Cat {
  photos = [
    {
      url: '../../assets/media/cat/baby-cat.jpg',
      description: 'Crow with his mom',
      size: 'large'
    },
    {
      url: '../../assets/media/cat/ivy-cat.jpg',
      description: 'Crow peering from behind a plant',
      size: 'normal'
    },
    {
      url: '../../assets/media/cat/sleepy-cat.jpg',
      description: 'Crow sleeping on a bed',
      size: 'normal'
    },
    {
      url: '../../assets/media/cat/hunting-cat.jpg',
      description: 'Crow hunting the camera from the grass',
      size: 'large'
    },
    {
      url: '../../assets/media/cat/snow-cat.jpg',
      description: 'Crow hunting in snow',
      size: 'tall'
    },
    {
      url: '../../assets/media/cat/tree-cat.jpg',
      description: 'Crow sitting on a tree log',
      size: 'tall'
    }
  ];
}
