import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    showNav: boolean = true;

    constructor(private router: Router) {
      router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
          this.showNav = false;
        }
      });
    }

    toggleNav(): void {
      this.showNav = !this.showNav;
    }
}
