import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NAV_LINKS, PROFILE } from './data/profile.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar [links]="links" [brand]="p.firstName" />
    <main>
      <app-hero />
      <app-skills />
      <app-about />
      <app-projects />
      <app-experience />
      <app-education />
      <app-contact />
    </main>
    <app-footer [name]="p.name" [github]="p.github" [linkedin]="p.linkedin" [email]="p.email" />
  `,
})
export class PortfolioComponent implements AfterViewInit {
  private readonly spy = inject(ScrollSpyService);

  protected readonly p = PROFILE;
  protected readonly links = NAV_LINKS;

  ngAfterViewInit(): void {
    // All sections exist now, so the observer can attach to them.
    this.spy.observe(this.links.map((l) => l.id));
  }
}
