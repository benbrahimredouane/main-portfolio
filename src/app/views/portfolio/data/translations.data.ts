export type Lang = 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    switchLang: string;
  };
  hero: {
    greeting: string;
    ctaProjects: string;
    ctaContact: string;
  };
  sections: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  contact: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sentSuccess: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      switchLang: 'FR',
    },
    hero: {
      greeting: 'Hi, I am',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact Me',
    },
    sections: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Get in Touch',
    },
    contact: {
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      messageLabel: 'Message',
      sendButton: 'Send Message',
      sentSuccess: 'Message sent successfully!',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Formation',
      contact: 'Contact',
      switchLang: 'EN',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
    },
    sections: {
      about: 'À propos de moi',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Formation',
      contact: 'Contactez-moi',
    },
    contact: {
      nameLabel: 'Votre nom',
      emailLabel: 'Votre e-mail',
      messageLabel: 'Message',
      sendButton: 'Envoyer le message',
      sentSuccess: 'Message envoyé avec succès !',
    },
  },
};