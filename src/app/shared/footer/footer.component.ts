import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    linkedin = 'assets/icons/linkedin.svg';
    github = 'assets/icons/github.svg';
    twitter = 'assets/icons/twitter.svg';

    backToTop(): void {
        window.scrollTo(0, 0);
    }
}
