import { Component, AfterViewInit, OnDestroy, inject, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GsapService } from '../../shared/gsap.service';
import { ProjectService } from '../../projects/project-service';
import { Project } from '../../projects/Project';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-preview',
  imports: [RouterModule],
  templateUrl: './preview.html',
  styleUrl: './preview.css',
})
export class Preview implements OnInit, AfterViewInit, OnDestroy {
  private gsapService = inject(GsapService);

  private focusedProject: Element | null = null;
  private galleryUi: HTMLElement | null = null;
  private canScrollDismiss = false;
  private scrollTriggers: ScrollTrigger[] = [];

  private projectService = inject(ProjectService);
  projects: Project[] = [];

  ngOnInit() {
    this.projectService.projectsOnly$.subscribe(projects => {
      this.projects = projects;
    });
  }

  ngAfterViewInit() {
    this.gsapService.registerAnimation(() => this.initAnimations());
  }

  private initAnimations() {
    if (document.getElementById('portfolio')) {
      this.initHorizontalGalleries();
    }
    this.initProjectFocus();
  }

  private initHorizontalGalleries() {
    const sections = gsap.utils.toArray<Element>('.horiz-gallery-wrapper');

    sections.forEach((sec) => {
      const pinWrap = sec.querySelector('.horiz-gallery-strip') as HTMLElement;
      const progressFill = sec.querySelector('.gallery-progress-fill') as HTMLElement;
      const counterEl = sec.querySelector('.gallery-counter') as HTMLElement;
      const cards = gsap.utils.toArray<Element>('.project-wrap');
      const totalCards = cards.length;

      this.galleryUi = sec.querySelector('.gallery-ui') as HTMLElement;

      let pinWrapWidth = 0;
      let horizontalScrollLength = 0;

      const refresh = () => {
        pinWrapWidth = pinWrap.scrollWidth;
        horizontalScrollLength = pinWrapWidth - window.innerWidth;
      };

      refresh();

      // Give GSAP ownership of the skew/scale so animations have no parse jitter
      gsap.set(cards, { skewY: 10, scaleY: 1.25 });

      // Reveal — stagger cards in when section enters viewport
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            duration: 0.7,
            stagger: 0.09,
            ease: 'power2.out',
          });
        },
      });

      const tween = gsap.to(pinWrap, {
        scrollTrigger: {
          scrub: true,
          trigger: sec,
          pin: sec,
          start: 'center center',
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(progressFill, { scaleX: self.progress });

            const activeIndex = Math.min(
              Math.floor(self.progress * totalCards) + 1,
              totalCards
            );
            counterEl.textContent =
              `${String(activeIndex).padStart(2, '0')} / ${String(totalCards).padStart(2, '0')}`;
          },
        },
        x: () => -horizontalScrollLength,
        ease: 'none',
      });

      if (tween.scrollTrigger) this.scrollTriggers.push(tween.scrollTrigger);
      ScrollTrigger.addEventListener('refreshInit', refresh);
    });
  }

  private initProjectFocus() {
    const lenis = this.gsapService.lenis;

    document.querySelectorAll('.project-wrap').forEach((project) => {
      project.addEventListener('click', () => {
        if (!this.focusedProject) {
          this.focusedProject = project;
          this.canScrollDismiss = false;
          this.galleryUi?.classList.add('hidden');

          gsap.to(project, {
            skewY: 0,
            scaleX: 1.5,
            scaleY: 1.5,
            zIndex: 1000,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              (project as HTMLElement).classList.add('focused');
              setTimeout(() => { this.canScrollDismiss = true; }, 1000);
            },
          });
        } else {
          this.unfocusProject(this.focusedProject);
          this.focusedProject = null;
        }
      });
    });

    lenis?.on('scroll', () => {
      if (this.focusedProject && this.canScrollDismiss) {
        this.unfocusProject(this.focusedProject);
        this.focusedProject = null;
      }
    });
  }

  private unfocusProject(project: Element) {
    this.canScrollDismiss = false;
    (project as HTMLElement).classList.remove('focused');
    this.galleryUi?.classList.remove('hidden');

    gsap.to(project, {
      skewY: 10,
      scaleX: 1,
      scaleY: 1.25,
      zIndex: 1,
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }

  ngOnDestroy() {
    this.scrollTriggers.forEach((st) => st.kill());
  }
}