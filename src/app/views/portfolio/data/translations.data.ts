import { CategoryId } from './models';

export type Lang = 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    mainNavigation: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    switchLang: string;
    switchLanguage: string;
    switchToDarkMode: string;
    switchToLightMode: string;
    talk: string;
    menu: string;
  };
  hero: {
    intro: string;
    role: string;
    basedIn: string;
    portraitAlt: string;
    projects: string;
    downloadCv: string;
    follow: string;
    projectCount: string;
    published: string;
  };
  about: {
    eyebrow: string;
    title: string;
    languages: string;
    softSkills: string[];
    levels: Record<string, string>;
  };
  skills: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    count: string;
    groups: { title: string; blurb: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    filter: string;
    all: string;
    categories: Record<CategoryId, string>;
    descriptions: Record<string, string>;
    viewOnGithub: string;
    viewProject: string;
    previewAlt: string;
    showMore: string;
    left: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    role: string;
    summary: string;
    highlights: string[];
  };
  education: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    titles: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    formLabel: string;
    nameError: string;
    emailError: string;
    messageError: string;
    sentSuccess: string;
    emailSubject: string;
    emailFrom: string;
    channels: Record<'Email' | 'Phone' | 'GitHub' | 'LinkedIn', string>;
  };
  footer: {
    builtWith: string;
    backToTop: string;
  };
  profile: {
    specialty: string;
    location: string;
    tagline: string;
    summary: string;
    training: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    nav: {
      home: 'Home',
      mainNavigation: 'Main navigation',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      switchLang: 'FR',
      switchLanguage: 'Switch to French',
      switchToDarkMode: 'Switch to dark mode',
      switchToLightMode: 'Switch to light mode',
      talk: "Let's talk",
      menu: 'Toggle menu',
    },
    hero: {
      intro: "I'm",
      role: 'Full Stack Developer',
      basedIn: 'based in',
      portraitAlt: 'Portrait of {name}',
      projects: 'Projects',
      downloadCv: 'Download CV',
      follow: 'Follow me on',
      projectCount: 'projects',
      published: 'published on GitHub',
    },
    about: {
      eyebrow: 'About me',
      title: 'Who is',
      languages: 'Languages',
      softSkills: [
        'Teamwork',
        'Clear communication',
        'Active listening',
        'Problem solving',
        'Autonomy',
        'Fast learner',
        'Rigor',
        'Time management',
      ],
      levels: { Native: 'Native', Fluent: 'Fluent', Intermediate: 'Intermediate' },
    },
    skills: {
      eyebrow: 'My skills',
      title: 'The stack I',
      titleAccent: 'build with',
      count: 'skills',
      groups: [
        { title: 'Languages', blurb: 'Java is my main language. I use PHP and JavaScript for the web side.' },
        { title: 'Frameworks & Libraries', blurb: 'Back-end APIs with Spring and Laravel, interfaces with Angular and React.' },
        { title: 'Databases', blurb: 'Relational databases, from embedded SQLite to MySQL and PostgreSQL.' },
        { title: 'Tools', blurb: 'Version control, containers, API testing, design and modelling.' },
      ],
    },
    projects: {
      eyebrow: 'My projects',
      title: "Things I've",
      titleAccent: 'built',
      description: "Every project links to its source code on GitHub. Filter by technology to find what you're looking for.",
      filter: 'Filter projects by category',
      all: 'All',
      categories: {
        java: 'Java & Spring Boot',
        laravel: 'Laravel & PHP',
        react: 'JavaScript / React',
        frontend: 'HTML, CSS & Frontend',
        sql: 'SQL & Databases',
      },
      descriptions: {
        Covoiturage: 'Multi-stop carpooling REST API: search trips by segment, book segments, and manage roles and errors.',
        AffiliateLink: 'Affiliation platform split into profile and offer modules with Spring Modulith.',
        ClickTrack: 'Link tracking API for a digital marketing agency: publishers generate tracking links and follow clicks per link and per offer.',
        LinePerm: 'Console app with hashed-password authentication, file creation and per-user read/write permissions, plus an action history.',
        'Ouslams Hustle': 'Laravel web application.',
        'Salus - AI Health Assistant': 'AI-powered health assistant platform.',
        'Janus - Habits Tracker API': 'REST API to track daily habits.',
        'Odin - Resource Management': 'Platform for managing resources.',
        'Soutenance Croisée 2': 'Cross-evaluation project, second round.',
        Thoth: 'Laravel project from the YouCode training, brief 10.',
        'Minerva - School Management': 'School management system.',
        'Mercury - Contact Manager': 'Contact manager application.',
        Athena: 'Laravel project from the YouCode training, brief 9.',
        'Bankly V2': 'Second version of the Bankly banking application.',
        Metis: 'Laravel project from the YouCode training, brief 8.',
        'Hermes - Productivity Dashboard': 'Task manager: add tasks, filter them (to do, done) and follow progress with instant updates.',
        'Soutenance Croisée 1': 'Cross-evaluation project, first round.',
        'Gestion des Abonnements': 'Subscription management interface.',
        'Task Manager': 'Simple task manager interface.',
        Cards: 'Responsive card layouts, YouCode brief 5.',
        'GoMoney - Loan Simulator': 'Loan simulator: enter amount, duration and rate to get the monthly payment and total cost.',
        Bankly: 'Banking database design and queries.',
      },
      viewOnGithub: 'View on GitHub',
      viewProject: 'View {title} on GitHub',
      previewAlt: 'Preview of {title}',
      showMore: 'Show more',
      left: 'left',
    },
    experience: {
      eyebrow: 'Experience',
      title: "Where I've",
      titleAccent: 'worked',
      role: 'Full-Stack Developer Intern',
      summary: 'Built and improved two web applications, working on both the front end and the back end.',
      highlights: [
        'YO Manager: commercial management application.',
        'YO Scan: management and tracking application.',
        'Developed front-end and back-end features and handled data management.',
        'Improved user interfaces.',
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'How I',
      titleAccent: 'learned',
      titles: [
        'Full-Stack Development',
        'Licence in Mathematics and Computer Science',
        'Baccalauréat in Physical Sciences',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Have a project in mind?',
      titleAccent: "Let's talk.",
      description: "I'm open to internships and junior full-stack roles. Send a message or reach out directly.",
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButton: 'Send message',
      formLabel: 'Contact form',
      nameError: 'Please enter your name.',
      emailError: 'Enter a valid email address, like name@example.com.',
      messageError: 'Write at least 10 characters.',
      sentSuccess: 'Your email app should open with the message ready to send.',
      emailSubject: 'Portfolio message from {name}',
      emailFrom: 'From',
      channels: { Email: 'Email', Phone: 'Phone', GitHub: 'GitHub', LinkedIn: 'LinkedIn' },
    },
    footer: {
      builtWith: 'Built with Angular and Tailwind CSS.',
      backToTop: 'Back to top',
    },
    profile: {
      specialty: 'Java & Spring Boot',
      location: 'Morocco',
      tagline: 'Complete web applications that combine clean code, working features and a good user experience.',
      summary: 'I am a Full Stack Developer specialised in Java. I design complete web applications where code quality, functional solutions and user experience go together.',
      training: 'I am currently training in Full-Stack Development at YouCode (Fondation OCP / UM6P) in Nador, and I recently completed an internship at YouNetwork where I worked on two production web applications.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      mainNavigation: 'Navigation principale',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Formation',
      contact: 'Contact',
      switchLang: 'EN',
      switchLanguage: 'Passer en anglais',
      switchToDarkMode: 'Activer le mode sombre',
      switchToLightMode: 'Activer le mode clair',
      talk: 'Me contacter',
      menu: 'Ouvrir ou fermer le menu',
    },
    hero: {
      intro: 'Je suis',
      role: 'Développeur Full Stack',
      basedIn: 'basé au',
      portraitAlt: 'Portrait de {name}',
      projects: 'Projets',
      downloadCv: 'Télécharger le CV',
      follow: 'Retrouvez-moi sur',
      projectCount: 'projets',
      published: 'publiés sur GitHub',
    },
    about: {
      eyebrow: 'À propos de moi',
      title: 'Qui est',
      languages: 'Langues',
      softSkills: [
        'Travail en équipe',
        'Communication claire',
        'Écoute active',
        'Résolution de problèmes',
        'Autonomie',
        'Apprentissage rapide',
        'Rigueur',
        'Gestion du temps',
      ],
      levels: { Native: 'Langue maternelle', Fluent: 'Courant', Intermediate: 'Intermédiaire' },
    },
    skills: {
      eyebrow: 'Mes compétences',
      title: 'Les technologies avec lesquelles je',
      titleAccent: 'développe',
      count: 'compétences',
      groups: [
        { title: 'Langages', blurb: 'Java est mon langage principal. J’utilise PHP et JavaScript pour le développement web.' },
        { title: 'Frameworks et bibliothèques', blurb: 'API back-end avec Spring et Laravel, interfaces avec Angular et React.' },
        { title: 'Bases de données', blurb: 'Bases de données relationnelles, de SQLite embarqué à MySQL et PostgreSQL.' },
        { title: 'Outils', blurb: 'Gestion de versions, conteneurs, tests d’API, conception et modélisation.' },
      ],
    },
    projects: {
      eyebrow: 'Mes projets',
      title: 'Ce que j’ai',
      titleAccent: 'développé',
      description: 'Chaque projet renvoie à son code source sur GitHub. Filtrez par technologie pour trouver ce que vous cherchez.',
      filter: 'Filtrer les projets par catégorie',
      all: 'Tous',
      categories: {
        java: 'Java et Spring Boot',
        laravel: 'Laravel et PHP',
        react: 'JavaScript / React',
        frontend: 'HTML, CSS et Front-end',
        sql: 'SQL et bases de données',
      },
      descriptions: {
        Covoiturage: 'API REST de covoiturage avec étapes multiples : recherche de trajets par segment, réservation et gestion des rôles et des erreurs.',
        AffiliateLink: 'Plateforme d’affiliation organisée en modules de profils et d’offres avec Spring Modulith.',
        ClickTrack: 'API de suivi de liens pour une agence de marketing numérique : création de liens de suivi et suivi des clics par lien et par offre.',
        LinePerm: 'Application console avec authentification par mot de passe haché, création de fichiers, permissions de lecture/écriture par utilisateur et historique des actions.',
        'Ouslams Hustle': 'Application web développée avec Laravel.',
        'Salus - AI Health Assistant': 'Plateforme d’assistance santé propulsée par l’intelligence artificielle.',
        'Janus - Habits Tracker API': 'API REST de suivi des habitudes quotidiennes.',
        'Odin - Resource Management': 'Plateforme de gestion des ressources.',
        'Soutenance Croisée 2': 'Projet d’évaluation croisée, deuxième édition.',
        Thoth: 'Projet Laravel réalisé pendant la formation YouCode, brief 10.',
        'Minerva - School Management': 'Système de gestion scolaire.',
        'Mercury - Contact Manager': 'Application de gestion des contacts.',
        Athena: 'Projet Laravel réalisé pendant la formation YouCode, brief 9.',
        'Bankly V2': 'Deuxième version de l’application bancaire Bankly.',
        Metis: 'Projet Laravel réalisé pendant la formation YouCode, brief 8.',
        'Hermes - Productivity Dashboard': 'Gestionnaire de tâches : ajout, filtrage (à faire, terminé) et suivi de progression en temps réel.',
        'Soutenance Croisée 1': 'Projet d’évaluation croisée, première édition.',
        'Gestion des Abonnements': 'Interface de gestion des abonnements.',
        'Task Manager': 'Interface simple de gestion des tâches.',
        Cards: 'Mises en page de cartes adaptatives, brief 5 de YouCode.',
        'GoMoney - Loan Simulator': 'Simulateur de prêt : saisissez le montant, la durée et le taux pour calculer les mensualités et le coût total.',
        Bankly: 'Conception et requêtes d’une base de données bancaire.',
      },
      viewOnGithub: 'Voir sur GitHub',
      viewProject: 'Voir {title} sur GitHub',
      previewAlt: 'Aperçu de {title}',
      showMore: 'Afficher plus',
      left: 'restants',
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Mon expérience',
      titleAccent: 'professionnelle',
      role: 'Stagiaire développeur Full Stack',
      summary: 'Développement et amélioration de deux applications web, côté front-end et back-end.',
      highlights: [
        'YO Manager : application de gestion commerciale.',
        'YO Scan : application de gestion et de suivi.',
        'Développement de fonctionnalités front-end et back-end et gestion des données.',
        'Amélioration des interfaces utilisateur.',
      ],
    },
    education: {
      eyebrow: 'Formation',
      title: 'Mon parcours',
      titleAccent: 'académique',
      titles: [
        'Développement Full Stack',
        'Licence en mathématiques et informatique',
        'Baccalauréat en sciences physiques',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Un projet en tête ?',
      titleAccent: 'Parlons-en.',
      description: 'Je suis ouvert aux stages et aux postes junior en développement Full Stack. Envoyez-moi un message ou contactez-moi directement.',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      messageLabel: 'Message',
      sendButton: 'Envoyer le message',
      formLabel: 'Formulaire de contact',
      nameError: 'Veuillez saisir votre nom.',
      emailError: 'Saisissez une adresse e-mail valide, par exemple nom@exemple.com.',
      messageError: 'Écrivez au moins 10 caractères.',
      sentSuccess: 'Votre application de messagerie devrait s’ouvrir avec le message prêt à être envoyé.',
      emailSubject: 'Message depuis le portfolio de {name}',
      emailFrom: 'De',
      channels: { Email: 'E-mail', Phone: 'Téléphone', GitHub: 'GitHub', LinkedIn: 'LinkedIn' },
    },
    footer: {
      builtWith: 'Réalisé avec Angular et Tailwind CSS.',
      backToTop: 'Retour en haut',
    },
    profile: {
      specialty: 'Java et Spring Boot',
      location: 'Maroc',
      tagline: 'Des applications web complètes qui allient code propre, fonctionnalités utiles et expérience utilisateur de qualité.',
      summary: 'Je suis développeur Full Stack spécialisé en Java. Je conçois des applications web complètes qui associent qualité du code, solutions fonctionnelles et expérience utilisateur.',
      training: 'Je suis actuellement une formation en développement Full Stack chez YouCode (Fondation OCP / UM6P) à Nador. J’ai récemment effectué un stage chez YouNetwork, où j’ai travaillé sur deux applications web en production.',
    },
  },
};
