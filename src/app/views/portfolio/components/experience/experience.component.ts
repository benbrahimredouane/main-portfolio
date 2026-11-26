import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="bg-paper py-20 sm:py-28">
      <div class="mx-auto max-w-4xl px-5">
        <p class="flex items-center gap-2 text-sm font-semibold">
          <span class="flex" aria-hidden="true">
            <span class="size-4 rounded-full bg-ink"></span>
            <span class="-ml-1.5 size-4 rounded-full bg-brand"></span>
          </span>
          Experience
        </p>
        <h2 class="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Where I've <span class="text-brand">worked</span>
        </h2>

        <ol class="relative mt-10 space-y-8">
          <span class="absolute inset-y-0 left-[calc(0.625rem-1px)] w-0.5 bg-ink/15" aria-hidden="true"></span>

          @for (job of jobs; track job.company + job.period) {
            <li class="relative pl-10 sm:pl-12">
              <span class="absolute left-0 top-8 size-5 rounded-full bg-brand ring-4 ring-paper" aria-hidden="true"></span>

              <article class="rounded-3xl bg-ink p-6 text-cream sm:p-8">
                <div class="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 class="font-display text-2xl font-bold">{{ job.role }}</h3>
                    <p class="mt-1 font-semibold text-brand">{{ job.company }}</p>
                  </div>
                  <p class="inline-flex items-center gap-2 rounded-full bg-ink-soft px-4 py-1.5 text-sm">
                    <i class="fa-regular fa-calendar text-brand" aria-hidden="true"></i>
                    {{ job.period }}
                  </p>
                </div>

                <p class="mt-4 text-cream/75">{{ job.summary }}</p>

                <ul class="mt-4 space-y-2 text-sm text-cream/85">
                  @for (h of job.highlights; track h) {
                    <li class="flex gap-3">
                      <i class="fa-solid fa-circle-check mt-0.5 text-brand" aria-hidden="true"></i>
                      <span>{{ h }}</span>
                    </li>
                  }
                </ul>

                <ul class="mt-6 flex flex-wrap gap-2">
                  @for (t of job.tech; track t) {
                    <li class="rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">{{ t }}</li>
                  }
                </ul>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly jobs = EXPERIENCE;
}
