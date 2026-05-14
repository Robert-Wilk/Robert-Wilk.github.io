import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  funFacts: string[] = [
    'loves bike riding',
    'hangs out with his German Shepherd',
    'writes code',
    'plays saxophone',
    'likes bouldering',
    'has a garden',
    'wears shorts in winter',
    'grows carolina reaper peppers'
  ];

  funFact = signal(this.funFacts[0]);
  isVisible = signal(true);

  private i = 0;
  private funFactsInterval: any;

  ngOnInit(): void {
    this.funFactsInterval = setInterval(() => {
      this.isVisible.set(false);
      setTimeout(() => {
        this.i = (this.i + 1) % this.funFacts.length;
        this.funFact.set(this.funFacts[this.i]);
        this.isVisible.set(true);
      }, 350);
    }, 2500);
  }

  ngOnDestroy(): void {
    clearInterval(this.funFactsInterval);
  }
}