import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/skills.component.html'
})
export class SkillsComponent {
  protected readonly groups = SKILL_GROUPS;
  protected readonly open = signal<number | null>(0);

  protected toggle(i: number): void {
    this.open.update((current) => (current === i ? null : i));
  }
}
