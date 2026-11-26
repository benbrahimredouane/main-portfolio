import { ChangeDetectionStrategy, Component,inject } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';
import { TranslationService } from '../../../../core/services/translation.service'

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/experience.component.html'
})
export class ExperienceComponent {
    protected readonly i18n = inject(TranslationService);
  protected readonly jobs = EXPERIENCE;
}
