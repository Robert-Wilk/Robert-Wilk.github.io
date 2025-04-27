import { Component } from '@angular/core';
import { fadeAnimation } from './animations';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
  
})
export class AppComponent {
  title = 'Robert Wilk';

  showAnimation = true;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to the NavigationEnd event to trigger the animation on each navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
        // Trigger animation on each navigation event
        this.showAnimation = false; // Temporarily set to false to trigger the animation
        setTimeout(() => {
          this.showAnimation = true; // Re-enable animation after a brief delay
        }, 10); // Short delay to ensure animation is triggered
      });
  }
}
