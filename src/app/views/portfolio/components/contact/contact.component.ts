import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../../env/env';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TranslationService } from '../../../../core/services/translation.service';
import { PROFILE } from '../../data/profile.data';
import { checkContactRateLimit } from './contact-rate-limit';

type SendStatus = 'idle' | 'sending' | 'success' | 'error' | 'limited' | 'storage-error';

const RATE_LIMIT_STORAGE_PREFIX = 'portfolio-contact-sends:';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  protected readonly i18n = inject(TranslationService);

  protected readonly status = signal<SendStatus>('idle');

  protected readonly channels = [
    { key: 'Email' as const, value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: 'fa-solid fa-envelope', external: false },
    { key: 'Phone' as const, value: PROFILE.phone, href: `tel:${PROFILE.phone}`, icon: 'fa-solid fa-phone', external: false },
    { key: 'GitHub' as const, value: 'benbrahimredouane', href: PROFILE.github, icon: 'fa-brands fa-github', external: true },
    { key: 'LinkedIn' as const, value: 'redouane-benbrahim', href: PROFILE.linkedin, icon: 'fa-brands fa-linkedin-in', external: true },
  ];

  protected model = {
    name: '',
    email: '',
    message: '',
  };

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid || this.status() === 'sending') {
      form.control.markAllAsTouched();
      return;
    }

    const now = Date.now();
    const storageKey = RATE_LIMIT_STORAGE_PREFIX + this.model.email.trim().toLowerCase();

    try {
      const { allowed, recentAttempts } = checkContactRateLimit(localStorage.getItem(storageKey), now);
      if (!allowed) {
        this.status.set('limited');
        return;
      }

      localStorage.setItem(storageKey, JSON.stringify([...recentAttempts, now]));
    } catch (error) {
      console.error('Could not enforce the contact form rate limit', error);
      this.status.set('storage-error');
      return;
    }

    this.status.set('sending');

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          to_email: PROFILE.email,
          from_name: this.model.name,
          from_email: this.model.email,
          reply_to: this.model.email,
          message: this.model.message,
        },
        {
          publicKey: environment.emailjs.publicKey,
        },
      );

      this.status.set('success');
      form.resetForm();
      this.model = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('EmailJS send failed', error);
      this.status.set('error');
    }
  }

  protected invalid(form: NgForm, name: 'name' | 'email' | 'message'): boolean {
    const control = form.controls[name];
    return !!control && control.invalid && (control.touched || form.submitted);
  }

}