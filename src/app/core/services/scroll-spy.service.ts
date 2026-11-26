import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Tracks which page section is currently in view so the navbar can highlight it. */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private mutationObserver?: MutationObserver;
  private sectionIds: string[] = [];
  private readonly observedSections = new Map<string, HTMLElement>();

  readonly activeId = signal('home');

  observe(ids: string[]): void {
    if (!this.isBrowser) return;
    this.observer?.disconnect();
    this.mutationObserver?.disconnect();
    this.sectionIds = ids;
    this.observedSections.clear();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeId.set(entry.target.id);
        }
      },
      // A section is "active" while it crosses the middle band of the viewport.
      { rootMargin: '-45% 0px -50% 0px' },
    );

    this.observeCurrentSections();
    this.mutationObserver = new MutationObserver(() => this.observeCurrentSections());
    this.mutationObserver.observe(document.querySelector('main') ?? document.body, {
      childList: true,
      subtree: true,
    });
  }

  private observeCurrentSections(): void {
    if (!this.observer) return;

    for (const id of this.sectionIds) {
      const current = document.getElementById(id);
      const observed = this.observedSections.get(id);
      if (current === observed) continue;

      if (observed) this.observer.unobserve(observed);
      if (current) {
        this.observedSections.set(id, current);
        this.observer.observe(current);
      } else {
        this.observedSections.delete(id);
      }
    }
  }
}
