import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly currentTheme = signal<Theme>(this.getInitialTheme());
  readonly theme = this.currentTheme.asReadonly();

  constructor() {
    effect(() => {
      if (!this.isBrowser) return;
      const active = this.currentTheme();
      document.documentElement.setAttribute('data-theme', active);
      try {
        localStorage.setItem(STORAGE_KEY, active);
      } catch {
        // Ignore storage errors (e.g., restricted browser modes)
      }
    });
  }

  toggleTheme(): void {
    this.currentTheme.update((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) return 'light';
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // Ignore storage errors
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}