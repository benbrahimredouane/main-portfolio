import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="border-t-4 border-brand bg-ink py-20 text-cream sm:py-28">
      <div class="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <!-- Info -->
        <div>
          <p class="flex items-center gap-2 text-sm font-semibold">
            <span class="flex" aria-hidden="true">
              <span class="size-4 rounded-full bg-cream"></span>
              <span class="-ml-1.5 size-4 rounded-full bg-brand"></span>
            </span>
            Contact
          </p>
          <h2 class="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Have a project in mind? <span class="text-brand">Let's talk.</span>
          </h2>
          <p class="mt-4 max-w-md text-cream/70">
            I'm open to internships and junior full-stack roles. Send a message or reach out directly.
          </p>

          <ul class="mt-8 grid gap-3">
            @for (c of channels; track c.label) {
              <li>
                <a
                  [href]="c.href"
                  [attr.target]="c.external ? '_blank' : null"
                  [attr.rel]="c.external ? 'noopener noreferrer' : null"
                  class="group flex items-center gap-4 rounded-2xl bg-ink-soft p-4 transition-colors hover:bg-brand hover:text-ink"
                >
                  <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-lg text-ink transition-colors group-hover:bg-ink group-hover:text-brand">
                    <i [class]="c.icon" aria-hidden="true"></i>
                  </span>
                  <span class="min-w-0">
                    <span class="block text-xs opacity-70">{{ c.label }}</span>
                    <span class="block truncate font-semibold">{{ c.value }}</span>
                  </span>
                </a>
              </li>
            }
          </ul>
        </div>

        <!-- Form -->
        <form
          [formGroup]="form"
          (ngSubmit)="submit()"
          novalidate
          class="rounded-3xl bg-paper p-6 text-ink sm:p-8"
          aria-label="Contact form"
        >
          <div class="grid gap-5">
            <div>
              <label for="c-name" class="text-sm font-semibold">Name</label>
              <input id="c-name" type="text" formControlName="name" autocomplete="name"
                     class="mt-1.5 w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
                     [attr.aria-invalid]="invalid('name')" aria-describedby="c-name-err" />
              @if (invalid('name')) {
                <p id="c-name-err" class="mt-1.5 text-sm text-red-700">Please enter your name.</p>
              }
            </div>

            <div>
              <label for="c-email" class="text-sm font-semibold">Email</label>
              <input id="c-email" type="email" formControlName="email" autocomplete="email"
                     class="mt-1.5 w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
                     [attr.aria-invalid]="invalid('email')" aria-describedby="c-email-err" />
              @if (invalid('email')) {
                <p id="c-email-err" class="mt-1.5 text-sm text-red-700">Enter a valid email address, like name&#64;example.com.</p>
              }
            </div>

            <div>
              <label for="c-message" class="text-sm font-semibold">Message</label>
              <textarea id="c-message" rows="5" formControlName="message"
                        class="mt-1.5 w-full resize-y rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
                        [attr.aria-invalid]="invalid('message')" aria-describedby="c-message-err"></textarea>
              @if (invalid('message')) {
                <p id="c-message-err" class="mt-1.5 text-sm text-red-700">Write at least 10 characters.</p>
              }
            </div>

            <div>
              <app-button variant="dark" type="submit" icon="fa-solid fa-paper-plane">Send message</app-button>
              @if (sent()) {
                <p class="mt-3 text-sm text-ink/70" role="status">Your email app should open with the message ready to send.</p>
              }
            </div>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly p = PROFILE;

  protected readonly sent = signal(false);

  protected readonly channels = [
    { label: 'Email', value: this.p.email, href: `mailto:${this.p.email}`, icon: 'fa-solid fa-envelope', external: false },
    { label: 'Phone', value: this.p.phone, href: `tel:${this.p.phone}`, icon: 'fa-solid fa-phone', external: false },
    { label: 'GitHub', value: 'benbrahimredouane', href: this.p.github, icon: 'fa-brands fa-github', external: true },
    { label: 'LinkedIn', value: 'redouane-benbrahim', href: this.p.linkedin, icon: 'fa-brands fa-linkedin-in', external: true },
  ];

  protected readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected invalid(name: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${this.p.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
