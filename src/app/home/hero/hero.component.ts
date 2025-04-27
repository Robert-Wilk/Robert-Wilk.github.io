import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  funFacts: string[] = [
    'loves bike riding',
    'hangs out with his German Shepard',
    'writes code',
    'plays saxophone',
    'likes bouldering',
    'has a garden',
    'wears shorts in winter',
    'grows carolina reaper peppers'
  ]
  funFact: string = 'writes code';
  funFactsInterval: any;

  currentTime: string = Date();
  timeInterval: any;

  ngOnInit(): void {
    let i = 0;
    this.funFactsInterval = setInterval(() => {
      this.funFact = this.funFacts[i];
      i = i == this.funFacts.length - 1? 0 : i + 1;
    }, 2500)

    this.timeInterval = setInterval(() => {
      this.currentTime = Date();
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.funFactsInterval);
  }
}
