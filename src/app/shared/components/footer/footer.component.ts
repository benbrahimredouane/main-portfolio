import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/footer.component.html'
})
export class FooterComponent {
  readonly name = input.required<string>();
  readonly github = input.required<string>();
  readonly linkedin = input.required<string>();
  readonly email = input.required<string>();
  protected readonly year = new Date().getFullYear();
}
