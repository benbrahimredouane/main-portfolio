import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PROFILE } from '../../data/profile.data';
import { PROJECTS } from '../../data/projects.data';
import { TranslationService } from '../../../../core/services/translation.service'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/hero.component.html'
})
export class HeroComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly p = PROFILE;
  protected readonly projectCount = PROJECTS.length;
}
