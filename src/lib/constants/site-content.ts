import { NavigationItem, LocalizedContent } from "@/types";

// Professional Cleaning Services Business Content - PLACEHOLDER

export const SITE_CONFIG = {
  name: "Technivapeur",
  description: {
    fr: "Services de nettoyage à la vapeur professionnel pour votre maison et votre entreprise",
    en: "Professional steam cleaning services for your home and business",
  },
  tagline: {
    fr: "Un espace propre, un esprit serein",
    en: "A Clean Space, A Clear Mind",
  },
  ctaText: {
    fr: "Demander une soumission",
    en: "Get a Free Quote",
  },
  location: "Greater Toronto Area",
  phone: "1-855-TECHVAP",
  email: "info@technivapeur.com",
} as const;

export const NAVIGATION_ITEMS: LocalizedContent<NavigationItem[]> = {
  fr: [
    { name: "Accueil", href: "#home" },
    { name: "Nos services", href: "#services" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
};

export const HERO_CONTENT = {
  title: {
    fr: "Services de Nettoyage Professionnel",
    en: "Professional Cleaning Services",
  },
  subtitle: {
    fr: "Nous offrons des services de nettoyage de qualité supérieure pour votre maison et votre entreprise",
    en: "We provide premium quality cleaning services for your home and business",
  },
  description: {
    fr: "Des professionnels formés et assurés • Satisfaction garantie à 100% • Produits écologiques",
    en: "Trained & Insured Professionals • 100% Satisfaction Guaranteed • Eco-Friendly Products",
  },
  cta: {
    fr: "Demander une soumission gratuite",
    en: "Get a Free Quote",
  },
  ctaSecondary: {
    fr: "Appelez-nous",
    en: "Call Us Today",
  },
};

export const APPROACH_CONTENT = {
  title: {
    fr: "Pourquoi Choisir Technivapeur?",
    en: "Why Choose Technivapeur?",
  },
  intro: {
    fr: "Nous offrons une garantie de service à 100%. Chaque maison est unique, c'est pourquoi nous personnalisons nos services selon vos besoins spécifiques.",
    en: "We offer a 100% Service Guarantee. Every home is unique, which is why we customize our services to your specific needs.",
  },
  subtitle: {
    fr: "Notre Garantie de Service",
    en: "Our Guarantee of Service",
  },
};

export const PROCESS_STEPS = [
  {
    id: 1,
    title: {
      fr: "Professionnels Formés",
      en: "Trained Professionals",
    },
    subtitle: {
      fr: "Équipe qualifiée et assurée",
      en: "Qualified & Insured Team",
    },
    description: {
      fr: "Nos équipes arrivent en uniforme, sont vérifiées et entièrement assurées pour votre tranquillité d'esprit.",
      en: "Our teams arrive in uniform, are background-checked and fully insured for your peace of mind.",
    },
  },
  {
    id: 2,
    title: {
      fr: "Garantie 100%",
      en: "100% Guarantee",
    },
    subtitle: {
      fr: "Satisfaction garantie",
      en: "Satisfaction Guaranteed",
    },
    description: {
      fr: "Si vous n'êtes pas complètement satisfait, nous reviendrons nettoyer gratuitement ou corrigerons la situation.",
      en: "If you're not completely satisfied, we'll re-clean for free or make it right.",
    },
  },
  {
    id: 3,
    title: {
      fr: "Plans Personnalisés",
      en: "Customized Plans",
    },
    subtitle: {
      fr: "Adapté à vos besoins",
      en: "Tailored to Your Needs",
    },
    description: {
      fr: "Chaque maison est unique. Nous créons un plan de nettoyage personnalisé qui correspond à votre budget.",
      en: "Every home is unique. We create a customized cleaning plan that fits your budget.",
    },
  },
  {
    id: 4,
    title: {
      fr: "Produits Écologiques",
      en: "Eco-Friendly Products",
    },
    subtitle: {
      fr: "Sans danger pour votre famille",
      en: "Safe for Your Family",
    },
    description: {
      fr: "Nous utilisons des produits de nettoyage écologiques, sûrs pour vos enfants et vos animaux.",
      en: "We use eco-friendly cleaning products that are safe for your children and pets.",
    },
  },
];

export const SERVICES_CONTENT = {
  title: {
    fr: "Nos Services de Nettoyage",
    en: "Our Cleaning Services",
  },
  subtitle: {
    fr: "Des solutions professionnelles adaptées à tous vos besoins",
    en: "Professional solutions tailored to all your needs",
  },
};

export const SERVICES = [
  {
    id: "residential",
    title: {
      fr: "Nettoyage Résidentiel",
      en: "Residential Cleaning",
    },
    description: {
      fr: "Service de nettoyage régulier ou ponctuel pour votre maison. Nous prenons soin de chaque détail.",
      en: "Regular or one-time cleaning service for your home. We take care of every detail.",
    },
    features: {
      fr: ["Cuisine", "Salles de bain", "Chambres", "Espaces communs"],
      en: ["Kitchen", "Bathrooms", "Bedrooms", "Common Areas"],
    },
    image: "content_pic_big3.webp",
  },
  {
    id: "commercial",
    title: {
      fr: "Nettoyage Commercial",
      en: "Commercial Cleaning",
    },
    description: {
      fr: "Services professionnels pour bureaux, commerces et espaces commerciaux de toutes tailles.",
      en: "Professional services for offices, retail spaces and commercial properties of all sizes.",
    },
    features: {
      fr: ["Bureaux", "Commerces", "Immeubles", "Espaces partagés"],
      en: ["Offices", "Retail", "Buildings", "Shared Spaces"],
    },
    image: "2-commercial.webp",
  },
  {
    id: "furniture",
    title: {
      fr: "Nettoyage des Meubles",
      en: "Furniture Cleaning",
    },
    description: {
      fr: "Nettoyage professionnel de vos meubles rembourrés, canapés et chaises.",
      en: "Professional cleaning of your upholstered furniture, sofas and chairs.",
    },
    features: {
      fr: ["Canapés", "Fauteuils", "Chaises", "Tissus d'ameublement"],
      en: ["Sofas", "Armchairs", "Chairs", "Upholstery"],
    },
    image: "469648923_122174149208108452_263683896868960210_n.jpg",
  },
  {
    id: "ducts",
    title: {
      fr: "Nettoyage de Conduits",
      en: "Duct Cleaning",
    },
    description: {
      fr: "Nettoyage complet de vos conduits de ventilation pour un air plus sain.",
      en: "Complete cleaning of your ventilation ducts for healthier air.",
    },
    features: {
      fr: ["Conduits d'air", "Ventilation", "Qualité d'air", "Système HVAC"],
      en: ["Air ducts", "Ventilation", "Air quality", "HVAC system"],
    },
    image: null,
  },
];

export const ABOUT_CONTENT = {
  title: {
    fr: "Notre Garantie de Service",
    en: "Our Service Guarantee",
  },
  subtitle: {
    fr: "100% Satisfaction Garantie",
    en: "100% Satisfaction Guaranteed",
  },
  intro: {
    fr: "Nous savons que vous apprécierez la qualité premium de notre service de nettoyage, c'est pourquoi nous offrons une garantie de service à 100%!",
    en: "We know you'll enjoy the premium quality of our cleaning service, so we offer a 100% Guarantee of Service!",
  },
  sections: [
    {
      title: {
        fr: "Personnalisé pour Vous",
        en: "Customized for You",
      },
      content: {
        fr: "Nous traitons tous nos clients comme des individus. Puisque chaque maison est unique, nous n'avons pas de prix fixes. Nous visitons votre maison et fournissons une estimation gratuite et sans obligation.",
        en: "We treat all our clients as individuals. Since every home is unique, we do not have set prices. We visit your home and provide a free, no-obligation estimate.",
      },
    },
    {
      title: {
        fr: "Équipe Professionnelle",
        en: "Professional Team",
      },
      content: {
        fr: "Nous envoyons une équipe de deux professionnels formés à votre domicile. Ils arrivent en uniforme, sont vérifiés et entièrement assurés. Notre équipe apporte tout l'équipement et les fournitures nécessaires.",
        en: "We send a team of two trained professionals to your home. They arrive in uniform, are reference-checked and fully insured. Our team brings all necessary equipment and supplies.",
      },
    },
    {
      title: {
        fr: "Notre Engagement",
        en: "Our Commitment",
      },
      content: {
        fr: "Nous nous efforçons de fournir le plus haut niveau de qualité, de service et de valeur à chaque client. Si vous n'êtes pas complètement satisfait, informez-nous immédiatement et nous re-nettoierons gratuitement.",
        en: "We strive to provide the highest level of quality, service and value to each client. If you are not completely satisfied, inform us immediately and we will re-clean free of charge.",
      },
    },
  ],
};

export const TEAM_MEMBERS = [
  {
    name: "Jane Smith",
    role: { fr: "Directrice Générale", en: "General Manager" },
    bio: {
      fr: "15 ans d'expérience dans l'industrie du nettoyage",
      en: "15 years of experience in the cleaning industry",
    },
    image: "/team/placeholder.jpg",
  },
];

export const CONTACT_CONTENT = {
  title: {
    fr: "Demander une Soumission",
    en: "Request a Quote",
  },
  subtitle: {
    fr: "Contactez-nous pour une estimation gratuite",
    en: "Contact us for a free estimate",
  },
  formLabels: {
    firstName: { fr: "Prénom", en: "First Name" },
    lastName: { fr: "Nom", en: "Last Name" },
    email: { fr: "Courriel", en: "Email" },
    phone: { fr: "Téléphone", en: "Phone" },
    message: { fr: "Message", en: "Message" },
    submit: { fr: "Envoyer", en: "Submit" },
  },
  successMessage: {
    fr: "Merci! Nous vous contacterons bientôt.",
    en: "Thank you! We'll contact you soon.",
  },
  errorMessage: {
    fr: "Erreur lors de l'envoi. Veuillez réessayer.",
    en: "Error sending. Please try again.",
  },
};

export const USE_CASES_CONTENT = {
  title: { fr: "Cas d'usage", en: "Use Cases" },
};

export const USE_CASES = [];

export const VALUE_PROPS_CONTENT = {
  title: { fr: "Nos Avantages", en: "Our Benefits" },
  items: [],
};
