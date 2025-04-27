import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  showCopiedPopup = false;

  copy() {
    const text = 'TBD';
    navigator.clipboard.writeText(text).then(() => {
      this.showCopiedPopup = true;
      setTimeout(() => {
        this.showCopiedPopup = false;
      }, 2500); // Show toast for 2.5 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
