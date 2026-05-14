import { Component, AfterViewInit, OnDestroy, inject, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GsapService } from '../gsap.service';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements AfterViewInit, OnDestroy {
  private gsapService = inject(GsapService);

  @ViewChild('footerEl') footerEl!: ElementRef<HTMLElement>;
  @ViewChild('footerContainer') footerContainer!: ElementRef<HTMLElement>;

  private mouse = { x: 0, y: 0 };
  private mouseMoveHandler: ((e: MouseEvent) => void) | null = null;
  private blobTicker: (() => void) | null = null;
  private scrollTrigger: ScrollTrigger | null = null;

  ngAfterViewInit() {
    this.gsapService.registerAnimation(() => this.initAnimations());
  }

  private initAnimations() {
    const footerEl = this.footerEl.nativeElement;
    const footerContainer = this.footerContainer.nativeElement;

    gsap.set(footerContainer, { y: '-35%' });

    this.scrollTrigger = ScrollTrigger.create({
      trigger: footerEl,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const yValue = -35 * (1 - self.progress);
        gsap.set(footerContainer, { y: `${yValue}%` });
      },
    });

    // Blob hover animation
    this.mouseMoveHandler = (e: MouseEvent) => {
      const rect = footerContainer.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      }
    };
    window.addEventListener('mousemove', this.mouseMoveHandler);

    const blobs = gsap.utils.toArray<Element>(footerEl.querySelectorAll('.cursor-blob'));
    const setters = blobs.map((blob, i) => ({
      x: gsap.quickTo(blob, 'x', { duration: 1.2 + i * 0.4, ease: 'power3.out' }),
      y: gsap.quickTo(blob, 'y', { duration: 1.2 + i * 0.4, ease: 'power3.out' }),
    }));

    this.blobTicker = () => setters.forEach((s) => { s.x(this.mouse.x); s.y(this.mouse.y); });
    gsap.ticker.add(this.blobTicker);
  }

  ngOnDestroy() {
    this.scrollTrigger?.kill();
    if (this.mouseMoveHandler) window.removeEventListener('mousemove', this.mouseMoveHandler);
    if (this.blobTicker) gsap.ticker.remove(this.blobTicker);
  }
}