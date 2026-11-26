import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export type ButtonVariant = 'primary' | 'dark' | 'light' | 'outline' | 'outline-light';

const BASE =
  'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold ' +
  'transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-ink hover:bg-ink hover:text-cream',
  dark: 'bg-ink text-cream hover:bg-brand hover:text-ink',
  light: 'bg-cream text-ink hover:bg-brand',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-cream',
  'outline-light': 'border-2 border-cream/30 text-cream hover:border-brand hover:text-brand',
};

const ICON_BUBBLE: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-brand',
  dark: 'bg-brand text-ink',
  light: 'bg-ink text-cream',
  outline: 'bg-ink text-cream',
  'outline-light': 'bg-brand text-ink',
};

/**
 * Link or button with an optional trailing icon.
 * Renders an <a> when `href` is set, otherwise a <button>.
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #content>
      <span><ng-content /></span>
      @if (icon()) {
        <span
          class="grid size-7 place-items-center rounded-full text-xs transition-transform duration-200 group-hover:scale-110"
          [class]="bubble()"
        >
          <i [class]="icon()" aria-hidden="true"></i>
        </span>
      }
    </ng-template>

    @if (href()) {
      <a
        [href]="href()"
        [class]="classes()"
        [attr.target]="external() ? '_blank' : null"
        [attr.rel]="external() ? 'noopener noreferrer' : null"
        [attr.download]="download() || null"
      >
        <ng-container *ngTemplateOutlet="content" />
      </a>
    } @else {
      <button [type]="type()" [disabled]="disabled()" [class]="classes()">
        <ng-container *ngTemplateOutlet="content" />
      </button>
    }
  `,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly href = input<string>('');
  readonly icon = input<string>('');
  readonly external = input(false);
  /** Pass a file name to make the link download instead of navigate. */
  readonly download = input<string>('');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);

  protected readonly classes = computed(() => `${BASE} ${VARIANTS[this.variant()]}`);
  protected readonly bubble = computed(() => ICON_BUBBLE[this.variant()]);
}
