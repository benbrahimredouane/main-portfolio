import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CategoryId, Project } from '../../data/models';
import { CATEGORIES, PROJECTS, categoryImage } from '../../data/projects.data';

type Filter = CategoryId | 'all';
const PAGE_SIZE = 6;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '/projects.component.html'
})
export class ProjectsComponent {
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
}
