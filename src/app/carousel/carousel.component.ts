import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CarouselDataService } from '../services/carousel-data/carousel-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  
  slides: any[] = [];

  constructor(private carouselDataService: CarouselDataService) { }

  ngOnInit(): void {
    this.getCarouselData();
  }

  getCarouselData(): void {
    this.carouselDataService.get()
    .subscribe((data: any) => this.slides = data);
  }
}
