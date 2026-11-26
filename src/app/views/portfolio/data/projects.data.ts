import { CategoryId, Project, ProjectCategory } from './models';

export const CATEGORIES: ProjectCategory[] = [
  { id: 'java', label: 'Java & Spring Boot', icon: 'fa-brands fa-java' },
  { id: 'laravel', label: 'Laravel & PHP', icon: 'fa-brands fa-laravel' },
  { id: 'react', label: 'JavaScript / React', icon: 'fa-brands fa-react' },
  { id: 'frontend', label: 'HTML, CSS & Frontend', icon: 'fa-brands fa-html5' },
  { id: 'sql', label: 'SQL & Databases', icon: 'fa-solid fa-database' },
];

export const categoryImage = (id: CategoryId): string => `assets/images/projects/placeholder-${id}.svg`;

const gh = (repo: string) => `https://github.com/benbrahimredouane/${repo}`;

// TODO: every description ending with "(placeholder)" is generic. Replace it with one real sentence.
export const PROJECTS: Project[] = [
  {
    title: 'Covoiturage',
    repoUrl: gh('covoiturage'),
    category: 'java',
    description: 'Multi-stop carpooling REST API: search trips by segment, book segments, and manage roles and errors.',
    tech: ['Java', 'Spring Boot', 'REST API'],
  },
  {
    title: 'AffiliateLink',
    repoUrl: gh('AffiliateLink-Plateforme-d-affiliation'),
    category: 'java',
    description: 'Affiliation platform split into profile and offer modules with Spring Modulith.',
    tech: ['Java', 'Spring Boot', 'Spring Modulith'],
  },
  {
    title: 'ClickTrack',
    repoUrl: gh('Service-de-tracking-ClickTrack'),
    category: 'java',
    description: 'Link tracking API for a digital marketing agency: publishers generate tracking links and follow clicks per link and per offer.',
    tech: ['Java', 'Spring MVC', 'XML config', 'Tomcat 10.1'],
  },
  {
    title: 'LinePerm',
    repoUrl: gh('LinePermission'),
    category: 'java',
    description: 'Console app with hashed-password authentication, file creation and per-user read/write permissions, plus an action history.',
    tech: ['Java 17', 'JDBC', 'SQLite', 'jBCrypt'],
  },
  {
    title: 'Ouslams Hustle',
    repoUrl: gh('Ouslams-hustle'),
    category: 'laravel',
    description: 'Laravel web application (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Salus - AI Health Assistant',
    repoUrl: gh('brief_15--Salus-AI-Health-Assistant-Platform'),
    category: 'laravel',
    description: 'AI-powered health assistant platform (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Janus - Habits Tracker API',
    repoUrl: gh('brief_14--Janus-Habits-Tracker-API'),
    category: 'laravel',
    description: 'REST API to track daily habits (placeholder).',
    tech: ['Laravel', 'REST API'],
  },
  {
    title: 'Odin - Resource Management',
    repoUrl: gh('brief_13--Odin---plateforme-de-gestion-de-ressources'),
    category: 'laravel',
    description: 'Platform for managing resources (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Soutenance Croisée 2',
    repoUrl: gh('soutenance-croisee-2'),
    category: 'laravel',
    description: 'Cross-evaluation project, second round (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Thoth',
    repoUrl: gh('brief_10--Thoth'),
    category: 'laravel',
    description: 'Laravel project from the YouCode training, brief 10 (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Minerva - School Management',
    repoUrl: gh('brief_11--Minerva---School-Management-System'),
    category: 'laravel',
    description: 'School management system (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Mercury - Contact Manager',
    repoUrl: gh('brief_12--Mercury---Contact-Manager'),
    category: 'laravel',
    description: 'Contact manager application (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Athena',
    repoUrl: gh('brief_9--athena'),
    category: 'laravel',
    description: 'Laravel project from the YouCode training, brief 9 (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Bankly V2',
    repoUrl: gh('brief_7--bankly-V2'),
    category: 'laravel',
    description: 'Second version of the Bankly banking application (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Metis',
    repoUrl: gh('brief_8--Metis'),
    category: 'laravel',
    description: 'Laravel project from the YouCode training, brief 8 (placeholder).',
    tech: ['Laravel', 'PHP'],
  },
  {
    title: 'Hermes - Productivity Dashboard',
    repoUrl: gh('brief_16--Hermes'),
    category: 'react',
    description: 'Task manager: add tasks, filter them (to do, done) and follow progress with instant updates.',
    tech: ['React', 'JavaScript'],
  },
  {
    title: 'Soutenance Croisée 1',
    repoUrl: gh('soutenance-croisee-1'),
    category: 'react',
    description: 'Cross-evaluation project, first round (placeholder).',
    tech: ['React', 'JavaScript'],
  },
  {
    title: 'Gestion des Abonnements',
    repoUrl: gh('Gerer_abonnements'),
    category: 'frontend',
    description: 'Subscription management interface (placeholder).',
    tech: ['HTML', 'CSS'],
  },
  {
    title: 'Task Manager',
    repoUrl: gh('TaskManager'),
    category: 'frontend',
    description: 'Simple task manager interface (placeholder).',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Cards',
    repoUrl: gh('brief_5--cards'),
    category: 'frontend',
    description: 'Responsive card layouts, YouCode brief 5 (placeholder).',
    tech: ['HTML', 'CSS'],
  },
  {
    title: 'GoMoney - Loan Simulator',
    repoUrl: gh('brief_4--gomoney'),
    category: 'frontend',
    description: 'Loan simulator: enter amount, duration and rate to get the monthly payment and total cost.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'Bankly',
    repoUrl: gh('brief_6--bankly'),
    category: 'sql',
    description: 'Banking database design and queries (placeholder).',
    tech: ['SQL'],
  },
];
