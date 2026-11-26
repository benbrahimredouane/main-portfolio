import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/contact.component.html'
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
