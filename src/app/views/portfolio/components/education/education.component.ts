import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../data/education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="education" class="bg-cream py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-5">
        <p class="flex items-center gap-2 text-sm font-semibold">
          <span class="flex" aria-hidden="true">
            <span class="size-4 rounded-full bg-ink"></span>
            <span class="-ml-1.5 size-4 rounded-full bg-brand"></span>
          </span>
          Education
        </p>
        <h2 class="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          How I <span class="text-brand">learned</span>
        </h2>

        <ul class="mt-10 grid gap-5 md:grid-cols-3">
          @for (item of items; track item.title) {
            <li class="flex flex-col rounded-3xl bg-paper p-6 ring-1 ring-ink/5">
              <span class="grid size-14 place-items-center rounded-2xl bg-brand text-xl text-ink">
                <i [class]="item.icon" aria-hidden="true"></i>
              </span>
              <p class="mt-5 inline-flex w-fit items-center rounded-full bg-ink px-3 py-1 text-xs font-bold text-cream">{{ item.period }}</p>
              <h3 class="mt-3 font-display text-xl font-bold leading-snug">{{ item.title }}</h3>
              <p class="mt-2 text-sm text-ink/70">{{ item.institution }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class EducationComponent {
  protected readonly items = EDUCATION;
}
