import { ChangeDetectionStrategy, Component ,inject } from '@angular/core';
import { EDUCATION } from '../../data/education.data';
import { TranslationService } from '../../../../core/services/translation.service'

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/education.component.html'
})
export class EducationComponent {
    protected readonly i18n = inject(TranslationService);
  protected readonly items = EDUCATION;
}
