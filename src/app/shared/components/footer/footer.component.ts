import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/footer.component.html'
})
export class FooterComponent {
  protected readonly i18n = inject(TranslationService);
  readonly name = input.required<string>();
  readonly github = input.required<string>();
  readonly linkedin = input.required<string>();
  readonly email = input.required<string>();
  protected readonly year = new Date().getFullYear();
}
