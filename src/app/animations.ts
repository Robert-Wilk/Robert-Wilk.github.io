import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    style({ opacity: 0 }), // Initial state
    animate('1000ms ease-in-out', style({ opacity: 1 })), // Fade in
  ]),
]);

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ opacity: 0 })),
  ]),
]);
