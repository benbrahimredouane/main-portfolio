import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { ButtonComponent } from '../button/button.component';

export interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/navbar.component.html'
})
export class NavbarComponent {
  protected readonly spy = inject(ScrollSpyService);

  readonly links = input.required<NavLink[]>();
  readonly brand = input('Redouane');
  protected readonly open = signal(false);
}
