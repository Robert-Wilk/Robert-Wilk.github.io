import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = ['../../../assets/media/money.png', '../../../assets/media/robots.png', '../../../assets/media/angle-financial.png']; // Original images
  visibleImages: string[] = []; // Cloned images for seamless wrapping
  translateX = 0; // Translation offset
  speed = 1; // Scrolling speed (pixels per interval)
  isPaused = false;
  interval: any;

  ngOnInit() {
    // Clone the images for wrapping
    this.visibleImages = [
      this.images[this.images.length - 1], // Add last image to the start
      ...this.images,
      this.images[0] // Add first image to the end
    ];

    this.startMarquee();
  }

  startMarquee() {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.translateX -= this.speed;

        // Check if we've scrolled past the original images
        const totalWidth = 100 * this.images.length; // Total width of original images
        if (this.translateX <= -totalWidth) {
          this.translateX = 0; // Reset for seamless wrapping
        }
      }
    }, 16); // ~60 FPS
  }

  pauseCarousel() {
    this.isPaused = true;
  }

  resumeCarousel() {
    this.isPaused = false;
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }
}
