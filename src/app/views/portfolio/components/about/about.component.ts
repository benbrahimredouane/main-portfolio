import { ChangeDetectionStrategy, Component ,inject } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PROFILE } from '../../data/profile.data';
import { TranslationService } from '../../../../core/services/translation.service'
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:  './about.component.html'
})
export class AboutComponent {
  protected readonly p = PROFILE;
  protected readonly i18n = inject(TranslationService);
}
