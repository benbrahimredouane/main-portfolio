import { SkillGroup } from './models';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'fa-solid fa-code',
    blurb: 'Java is my main language. I use PHP and JavaScript for the web side.',
    items: [
      { name: 'Java', icon: 'fa-brands fa-java' },
      { name: 'PHP', icon: 'fa-brands fa-php' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'HTML', icon: 'fa-brands fa-html5' },
      { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'fa-solid fa-layer-group',
    blurb: 'Back-end APIs with Spring and Laravel, interfaces with Angular and React.',
    items: [
      { name: 'Spring Framework', icon: 'fa-solid fa-leaf' },
      { name: 'Laravel', icon: 'fa-brands fa-laravel' },
      { name: 'Angular', icon: 'fa-brands fa-angular' },
      { name: 'React', icon: 'fa-brands fa-react' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
      { name: 'TailwindCSS', icon: 'fa-solid fa-wind' },
    ],
  },
  {
    title: 'Databases',
    icon: 'fa-solid fa-database',
    blurb: 'Relational databases, from embedded SQLite to MySQL and PostgreSQL.',
    items: [
      { name: 'MySQL', icon: 'fa-solid fa-database' },
      { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
      { name: 'SQLite', icon: 'fa-solid fa-database' },
    ],
  },
  {
    title: 'Tools',
    icon: 'fa-solid fa-screwdriver-wrench',
    blurb: 'Version control, containers, API testing, design and modelling.',
    items: [
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'Jira', icon: 'fa-brands fa-jira' },
      { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
      { name: 'Figma', icon: 'fa-brands fa-figma' },
      { name: 'UML', icon: 'fa-solid fa-diagram-project' },
      { name: 'VS Code', icon: 'fa-solid fa-code' },
      { name: 'IntelliJ IDEA', icon: 'fa-solid fa-terminal' },
    ],
  },
];
