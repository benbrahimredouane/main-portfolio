import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Tracks which page section is currently in view so the navbar can highlight it. */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  readonly activeId = signal('home');

  observe(ids: string[]): void {
    if (!this.isBrowser) return;
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeId.set(entry.target.id);
        }
      },
      // A section is "active" while it crosses the middle band of the viewport.
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }
}
