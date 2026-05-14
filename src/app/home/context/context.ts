import { Component, OnDestroy, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DatePipe } from '@angular/common';

@Component({
  selector: 'app-context',
  imports: [DatePipe],
  templateUrl: './context.html',
  styleUrl: './context.css',
})
export class Context implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  currentTime = signal(new Date());

  private timeInterval: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timeInterval = setInterval(() => {
        this.currentTime.set(new Date());
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);
  }
}