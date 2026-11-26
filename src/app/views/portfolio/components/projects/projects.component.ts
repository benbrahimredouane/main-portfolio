import { ChangeDetectionStrategy, Component, computed, signal , inject } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CategoryId, Project } from '../../data/models';
import { CATEGORIES, PROJECTS, categoryImage } from '../../data/projects.data';
import { TranslationService } from '../../../../core/services/translation.service'

type Filter = CategoryId | 'all';
const PAGE_SIZE = 6;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
    protected readonly i18n = inject(TranslationService);
  protected readonly categories = CATEGORIES;
  protected readonly total = PROJECTS.length;
  protected readonly counts = CATEGORIES.reduce(
    (acc, c) => ({ ...acc, [c.id]: PROJECTS.filter((p) => p.category === c.id).length }),
    {} as Record<CategoryId, number>,
  );

  protected readonly selected = signal<Filter>('all');
  private readonly visibleCount = signal(PAGE_SIZE);

  private readonly filtered = computed(() =>
    this.selected() === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === this.selected()),
  );
  protected readonly visible = computed(() => this.filtered().slice(0, this.visibleCount()));
  protected readonly remaining = computed(() => this.filtered().length - this.visible().length);

  protected select(filter: Filter): void {
    this.selected.set(filter);
    this.visibleCount.set(PAGE_SIZE);
  }

  protected showMore(): void {
    this.visibleCount.update((n) => n + PAGE_SIZE);
  }

  protected imageFor(p: Project): string {
    return p.image ?? categoryImage(p.category);
  }

  protected categoryOf(p: Project) {
    return CATEGORIES.find((c) => c.id === p.category)!;
  }

  protected updateCardPointer(event: PointerEvent): void {
    if (event.pointerType === 'touch') return;

    const card = event.currentTarget;
    if (!(card instanceof HTMLElement)) return;

    const bounds = card.getBoundingClientRect();
    if (bounds.width === 0 || bounds.height === 0) return;

    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));

    card.style.setProperty('--pointer-x', `${x * 100}%`);
    card.style.setProperty('--pointer-y', `${y * 100}%`);
    card.style.setProperty('--rotate-x', `${(0.5 - y) * 7}deg`);
    card.style.setProperty('--rotate-y', `${(x - 0.5) * 7}deg`);
  }

  protected resetCardPointer(event: PointerEvent): void {
    const card = event.currentTarget;
    if (!(card instanceof HTMLElement)) return;

    card.style.setProperty('--pointer-x', '50%');
    card.style.setProperty('--pointer-y', '50%');
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  }
}
