import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/experience.component.html'
})
export class ExperienceComponent {
  protected readonly jobs = EXPERIENCE;
}
