import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PROFILE } from '../../data/profile.data';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/hero.component.html'
})
export class HeroComponent {
  protected readonly p = PROFILE;
  protected readonly projectCount = PROJECTS.length;
}
