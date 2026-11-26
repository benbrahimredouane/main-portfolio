export type CategoryId = 'java' | 'laravel' | 'react' | 'frontend' | 'sql';

export interface ProjectCategory {
  id: CategoryId;
  label: string;
  icon: string;
}

export interface Project {
  title: string;
  repoUrl: string;
  category: CategoryId;
  description: string;
  tech: string[];
  /** Optional. Falls back to the category placeholder in assets/images/projects. */
  image?: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  blurb: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  icon: string;
}
