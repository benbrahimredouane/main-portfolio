import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:  '/about.component.html'
})
export class AboutComponent {
  protected readonly p = PROFILE;
}
