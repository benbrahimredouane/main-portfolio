import { AfterViewInit, ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
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
import { PROFILE } from './data/profile.data';
import { TranslationService } from '../../core/services/translation.service';

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
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements AfterViewInit {
  protected readonly i18n = inject(TranslationService);
  private readonly spy = inject(ScrollSpyService);

  protected readonly p = PROFILE;
  protected readonly links = computed(() => {
    const nav = this.i18n.t().nav;
    return [
      { id: 'home', label: nav.home },
      { id: 'skills', label: nav.skills },
      { id: 'about', label: nav.about },
      { id: 'projects', label: nav.projects },
      { id: 'experience', label: nav.experience },
      { id: 'education', label: nav.education },
      { id: 'contact', label: nav.contact },
    ];
  });

  ngAfterViewInit(): void {
    // All sections exist now, so the observer can attach to them.
    this.spy.observe(this.links().map((l) => l.id));
  }
}
