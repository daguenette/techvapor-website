import { NavigationItem, LocalizedContent } from "@/types";

// TODO: Update all content with TechVapor specific information

export const SITE_CONFIG = {
  name: "TechVapor",
  description: {
    fr: "Solutions technologiques innovantes - [TODO: Add French description]",
    en: "Innovative technology solutions - [TODO: Add company description]",
  },
  tagline: {
    fr: "[TODO: Add French tagline for TechVapor]",
    en: "[TODO: Add your company tagline here]",
  },
  ctaText: {
    fr: "Commencer",
    en: "Get Started",
  },
  location: "[TODO: Add location]",
} as const;

export const NAVIGATION_ITEMS: LocalizedContent<NavigationItem[]> = {
  fr: [
    { name: "Accueil", href: "#home" },
    { name: "Notre approche", href: "#approach" },
    { name: "Nos services", href: "#services" },
    { name: "Cas d'usage", href: "#cases" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#home" },
    { name: "Our Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Client Cases", href: "#cases" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
};

export const HERO_CONTENT = {
  title: {
    fr: "Bienvenue chez TechVapor - [TODO: Add French title]",
    en: "Welcome to TechVapor - [TODO: Add compelling headline]",
  },
  subtitle: {
    fr: "[TODO: Add French subtitle describing your value proposition]",
    en: "[TODO: Add subtitle describing what TechVapor does and the value you provide]",
  },
  description: {
    fr: "TechVapor - [TODO: Add SEO description in French]",
    en: "TechVapor - [TODO: Add SEO description for your company]",
  },
};

export const APPROACH_CONTENT = {
  title: {
    fr: "Notre approche - [TODO: Add French title]",
    en: "Our Approach - [TODO: Add approach title]",
  },
  intro: {
    fr: "[TODO: Add description of your methodology in French]",
    en: "[TODO: Describe your company's approach and methodology here]",
  },
};

export const SERVICES_CONTENT = {
  title: {
    fr: "Nos services - [TODO: Add French title]",
    en: "Our Services - [TODO: Add services section title]",
  },
};

export const VALUE_PROPS_CONTENT = {
  title: {
    fr: "Pourquoi choisir TechVapor?",
    en: "Why choose TechVapor?",
  },
  items: [
    {
      key: "value1",
      title: {
        fr: "[TODO: Titre valeur 1]",
        en: "[TODO: Value proposition 1 title]",
      },
      description: {
        fr: "[TODO: Description de votre première valeur]",
        en: "[TODO: Description of your first key value proposition]",
      },
    },
    {
      key: "value2",
      title: {
        fr: "[TODO: Titre valeur 2]",
        en: "[TODO: Value proposition 2 title]",
      },
      description: {
        fr: "[TODO: Description de votre deuxième valeur]",
        en: "[TODO: Description of your second key value proposition]",
      },
    },
    {
      key: "value3",
      title: {
        fr: "[TODO: Titre valeur 3]",
        en: "[TODO: Value proposition 3 title]",
      },
      description: {
        fr: "[TODO: Description de votre troisième valeur]",
        en: "[TODO: Description of your third key value proposition]",
      },
    },
    {
      key: "value4",
      title: {
        fr: "[TODO: Titre valeur 4]",
        en: "[TODO: Value proposition 4 title]",
      },
      description: {
        fr: "[TODO: Description de votre quatrième valeur]",
        en: "[TODO: Description of your fourth key value proposition]",
      },
    },
    {
      key: "value5",
      title: {
        fr: "[TODO: Titre valeur 5]",
        en: "[TODO: Value proposition 5 title]",
      },
      description: {
        fr: "[TODO: Description de votre cinquième valeur]",
        en: "[TODO: Description of your fifth key value proposition]",
      },
    },
  ],
};

export const PROCESS_STEPS = [
  {
    id: 1,
    title: {
      fr: "[TODO: Étape 1]",
      en: "[TODO: Step 1 Title]",
    },
    subtitle: {
      fr: "[TODO: Sous-titre étape 1]",
      en: "[TODO: Step 1 subtitle]",
    },
    description: {
      fr: "[TODO: Description du processus étape 1 en français]",
      en: "[TODO: Describe the first step of your process]",
    },
  },
  {
    id: 2,
    title: {
      fr: "[TODO: Étape 2]",
      en: "[TODO: Step 2 Title]",
    },
    subtitle: {
      fr: "[TODO: Sous-titre étape 2]",
      en: "[TODO: Step 2 subtitle]",
    },
    description: {
      fr: "[TODO: Description du processus étape 2 en français]",
      en: "[TODO: Describe the second step of your process]",
    },
  },
  {
    id: 3,
    title: {
      fr: "[TODO: Étape 3]",
      en: "[TODO: Step 3 Title]",
    },
    subtitle: {
      fr: "[TODO: Sous-titre étape 3]",
      en: "[TODO: Step 3 subtitle]",
    },
    description: {
      fr: "[TODO: Description du processus étape 3 en français]",
      en: "[TODO: Describe the third step of your process]",
    },
  },
  {
    id: 4,
    title: {
      fr: "[TODO: Étape 4]",
      en: "[TODO: Step 4 Title]",
    },
    subtitle: {
      fr: "[TODO: Sous-titre étape 4]",
      en: "[TODO: Step 4 subtitle]",
    },
    description: {
      fr: "[TODO: Description du processus étape 4 en français]",
      en: "[TODO: Describe the fourth step of your process]",
    },
  },
];

export const SERVICES = [
  {
    id: 1,
    title: {
      fr: "[TODO: Service 1 titre français]",
      en: "[TODO: Service 1 Title]",
    },
    description: {
      fr: "[TODO: Description du service 1 en français]",
      en: "[TODO: Describe your first service offering]",
    },
  },
  {
    id: 2,
    title: {
      fr: "[TODO: Service 2 titre français]",
      en: "[TODO: Service 2 Title]",
    },
    description: {
      fr: "[TODO: Description du service 2 en français]",
      en: "[TODO: Describe your second service offering]",
    },
  },
  {
    id: 3,
    title: {
      fr: "[TODO: Service 3 titre français]",
      en: "[TODO: Service 3 Title]",
    },
    description: {
      fr: "[TODO: Description du service 3 en français]",
      en: "[TODO: Describe your third service offering]",
    },
  },
  {
    id: 4,
    title: {
      fr: "[TODO: Service 4 titre français]",
      en: "[TODO: Service 4 Title]",
    },
    description: {
      fr: "[TODO: Description du service 4 en français]",
      en: "[TODO: Describe your fourth service offering]",
    },
  },
];

export const USE_CASES_CONTENT = {
  title: {
    fr: "Nos réalisations",
    en: "Our Work",
  },
};

export const USE_CASES = [
  {
    id: 1,
    categoryKey: "category1",
    category: {
      fr: "[TODO: Catégorie 1]",
      en: "[TODO: Category 1]",
    },
    title: {
      fr: "[TODO: Titre cas d'usage 1 français]",
      en: "[TODO: Use Case 1 Title]",
    },
    description: {
      fr: "[TODO: Description du cas d'usage 1 en français]",
      en: "[TODO: Describe your first client success story or use case]",
    },
    metrics: {
      fr: "[TODO: Métriques de succès]",
      en: "[TODO: Success metrics]",
    },
  },
  {
    id: 2,
    categoryKey: "category2",
    category: {
      fr: "[TODO: Catégorie 2]",
      en: "[TODO: Category 2]",
    },
    title: {
      fr: "[TODO: Titre cas d'usage 2 français]",
      en: "[TODO: Use Case 2 Title]",
    },
    description: {
      fr: "[TODO: Description du cas d'usage 2 en français]",
      en: "[TODO: Describe your second client success story or use case]",
    },
    metrics: {
      fr: "[TODO: Métriques de succès]",
      en: "[TODO: Success metrics]",
    },
  },
  {
    id: 3,
    categoryKey: "category3",
    category: {
      fr: "[TODO: Catégorie 3]",
      en: "[TODO: Category 3]",
    },
    title: {
      fr: "[TODO: Titre cas d'usage 3 français]",
      en: "[TODO: Use Case 3 Title]",
    },
    description: {
      fr: "[TODO: Description du cas d'usage 3 en français]",
      en: "[TODO: Describe your third client success story or use case]",
    },
    metrics: {
      fr: "[TODO: Métriques de succès]",
      en: "[TODO: Success metrics]",
    },
  },
];

export const ABOUT_CONTENT = {
  title: {
    fr: "À propos de TechVapor",
    en: "About TechVapor",
  },
  subtitle: {
    fr: "[TODO: Add French subtitle about your team/company]",
    en: "[TODO: Add a brief introduction about your company and team]",
  },
  conclusion: {
    fr: "[TODO: Add French conclusion about your strengths]",
    en: "[TODO: Summarize your key strengths and what makes you unique]",
  },
};

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "[TODO: Team Member 1 Name]",
    specialty: {
      fr: "[TODO: Spécialité en français]",
      en: "[TODO: Team member specialty]",
    },
    bio: {
      fr: "[TODO: Bio en français - expérience et expertise]",
      en: "[TODO: Brief bio describing experience and expertise]",
    },
    strengths: {
      fr: ["[TODO: Force 1]", "[TODO: Force 2]", "[TODO: Force 3]"],
      en: ["[TODO: Strength 1]", "[TODO: Strength 2]", "[TODO: Strength 3]"],
    },
  },
  {
    id: 2,
    name: "[TODO: Team Member 2 Name]",
    specialty: {
      fr: "[TODO: Spécialité en français]",
      en: "[TODO: Team member specialty]",
    },
    bio: {
      fr: "[TODO: Bio en français - expérience et expertise]",
      en: "[TODO: Brief bio describing experience and expertise]",
    },
    strengths: {
      fr: ["[TODO: Force 1]", "[TODO: Force 2]", "[TODO: Force 3]"],
      en: ["[TODO: Strength 1]", "[TODO: Strength 2]", "[TODO: Strength 3]"],
    },
  },
];

export const CONTACT_CONTENT = {
  title: {
    fr: "Contactez-nous",
    en: "Get in touch",
  },
  subtitle: {
    fr: "[TODO: Add French subtitle inviting people to contact you]",
    en: "[TODO: Add subtitle encouraging visitors to reach out]",
  },
};
