import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../data/education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/education.component.html'
})
export class EducationComponent {
  protected readonly items = EDUCATION;
}
