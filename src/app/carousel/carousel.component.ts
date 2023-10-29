import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselDataService } from './carousel-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  
  slides$ = this.carouselDataService.carouselData$;

  constructor(private carouselDataService: CarouselDataService) { }

}
