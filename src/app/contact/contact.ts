import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

type ContactMode = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  mode = signal<ContactMode>('A');

  readonly email = 'contact.robertwilk@gmail.com';
  copied = signal(false);
  currentTime = signal('');

  private ticker: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.tick();
    this.ticker = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy() {
    if (this.ticker) clearInterval(this.ticker);
  }

  private tick() {
    const now = new Date();
    const opts: Intl.DateTimeFormatOptions = {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    this.currentTime.set(new Intl.DateTimeFormat('en-US', opts).format(now));
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}