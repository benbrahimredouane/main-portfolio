import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Lang, TRANSLATIONS, Translations } from '../../views/portfolio/data/translations.data';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly currentLang = signal<Lang>('en');
  private readonly document = inject(DOCUMENT);

  readonly lang = this.currentLang.asReadonly();
  readonly t = computed<Translations>(() => TRANSLATIONS[this.currentLang()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.currentLang();
    });
  }

  toggleLang(): void {
    this.currentLang.update((prev) => (prev === 'en' ? 'fr' : 'en'));
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
  }
}