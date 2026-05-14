import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  private _lenis: Lenis | null = null;
  private _lenisRafCallback: ((time: number) => void) | null = null;
  private _router = inject(Router);

  private _queue: (() => void)[] = [];
  private _ready = false;

  constructor() {
    this.initGsap();
    this.initLoadGate();
    this.initRouterRefresh();
  }

  private initGsap() {
    gsap.registerPlugin(ScrollTrigger);

    this._lenis = new Lenis();
    this._lenis.on('scroll', () => ScrollTrigger.update());

    this._lenisRafCallback = (time: number) => {
      this._lenis?.raf(time * 1000);
    };

    gsap.ticker.add(this._lenisRafCallback);
    gsap.ticker.lagSmoothing(0);
  }

  private initLoadGate() {
    window.addEventListener(
      'load',
      () => {
        this._ready = true;
        this._queue.forEach((fn) => fn());
        this._queue = [];
        ScrollTrigger.refresh();
      },
      { once: true }
    );
  }

  private initRouterRefresh() {
    this._router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        // After route settles, scroll to top and refresh all triggers
        this._lenis?.scrollTo(0, { immediate: true });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
  }

  registerAnimation(setupFn: () => void): void {
    if (this._ready) {
      setupFn();
      ScrollTrigger.refresh();
    } else {
      this._queue.push(setupFn);
    }
  }

  get lenis(): Lenis | null {
    return this._lenis;
  }

  destroy() {
    if (this._lenisRafCallback) {
      gsap.ticker.remove(this._lenisRafCallback);
      this._lenisRafCallback = null;
    }
    this._lenis?.destroy();
    this._lenis = null;
  }
}