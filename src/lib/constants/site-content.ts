import { NavigationItem, LocalizedContent } from "@/types";

// Professional Cleaning Services Business Content - PLACEHOLDER

export const SITE_CONFIG = {
  name: "Technivapeur",
  description: {
    fr: "Service professionnel de nettoyage de tapis à Montréal depuis 1996. Nettoyage à la vapeur pour tapis, meubles, matelas et après sinistre.",
    en: "Professional carpet steam cleaning in Montreal since 1996. Steam cleaning for carpets, furniture, mattresses, and post-disaster cleanup.",
  },
  tagline: {
    fr: "Nettoyage de tapis à Montréal depuis 1996",
    en: "Carpet Cleaning in Montreal Since 1996",
  },
  ctaText: {
    fr: "Demander une soumission",
    en: "Get a Free Quote",
  },
  location: {
    fr: "Montréal, Laval, Repentigny, Longueuil, Rive-Nord, Saint-Eustache, Saint-Jérôme, Terrebonne, Mascouche et environs",
    en: "Montreal, Laval, Repentigny, Longueuil, North Shore, Saint-Eustache, Saint-Jérôme, Terrebonne, Mascouche and surrounding areas", // TODO: Verify EN translation
  },
  phones: {
    montreal: "514-895-2027",
    riveNord: "450-492-1515",
  },
  phone: "514-895-2027", // Primary phone for backward compatibility
  email: "info@technivapeur.com",
} as const;

export const NAVIGATION_ITEMS: LocalizedContent<NavigationItem[]> = {
  fr: [
    { name: "Accueil", href: "#home" },
    { name: "Nos services", href: "#services" },
    { name: "À propos", href: "about" },
    { name: "Contact", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "about" },
    { name: "Contact", href: "#contact" },
  ],
};

export const HERO_CONTENT = {
  title: {
    fr: "Service Professionnel de Nettoyage de Tapis à Montréal Depuis 1996",
    en: "Professional Carpet Cleaning in Montreal Since 1996",
  },
  subtitle: {
    fr: "Besoin d'un nettoyage de tapis résidentiel ou commercial à Montréal? Technivapeur offre un service professionnel de nettoyage à la vapeur pour tapis, meubles, matelas et nettoyage après sinistre. Urgence disponible 24/7.",
    en: "Need residential or commercial carpet cleaning in Montreal? Technivapeur provides professional steam cleaning for carpets, furniture, mattresses, and post-disaster cleanup. 24/7 emergency service available.",
  },
  description: {
    fr: "Montréal: 514-895-2027 | Rive-Nord: 450-492-1515",
    en: "Montreal: 514-895-2027 | North Shore: 450-492-1515",
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
    fr: "Nos Services de Nettoyage à Montréal",
    en: "Our Cleaning Services in Montreal",
  },
  subtitle: {
    fr: "Des solutions professionnelles adaptées à tous vos besoins",
    en: "Professional solutions tailored to your needs",
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
      fr: "Nettoyage en profondeur de vos tapis, carpettes, meubles rembourrés et matelas. Séchage rapide, sans résidus, sans odeurs. Idéal pour les allergies et pour rafraîchir votre maison.",
      en: "Deep cleaning for carpets, area rugs, upholstered furniture, and mattresses. Fast drying, no residue, no odors—ideal for allergies and to refresh your home.",
    },
    features: {
      fr: ["Tapis", "Carpettes", "Meubles rembourrés", "Matelas"],
      en: ["Carpets", "Area rugs", "Upholstered furniture", "Mattresses"],
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
      fr: "Service de nettoyage pour édifices à bureaux, hôtels, cinémas, résidences pour personnes âgées et espaces industriels. Disponible 24/7 pour minimiser les interruptions.",
      en: "Cleaning services for office buildings, hotels, cinemas, senior residences, and industrial spaces. Available 24/7 to minimize downtime.",
    },
    features: {
      fr: ["Bureaux", "Hôtels", "Cinémas", "Espaces industriels"],
      en: ["Offices", "Hotels", "Cinemas", "Industrial spaces"],
    },
    image: "2-commercial.webp",
  },
  {
    id: "post-disaster",
    title: {
      fr: "Après sinistre",
      en: "Post-disaster",
    },
    description: {
      fr: "Intervention rapide 24/7 pour dégâts d'eau, inondations, incendies. Extraction d'eau, assèchement de planchers, déshumidification et élimination d'odeurs. Accepté par les assurances.",
      en: "24/7 rapid response for water damage, flooding, and fire. Water extraction, floor drying, dehumidification, and odor removal. Insurance accepted.",
    },
    features: {
      fr: ["Extraction d'eau", "Assèchement", "Déshumidification", "Élimination d'odeurs"],
      en: ["Water extraction", "Drying", "Dehumidification", "Odor removal"],
    },
    image: null,
  },
  {
    id: "boat-trailer",
    title: {
      fr: "Nettoyage Bateau & Roulotte",
      en: "Boat & Trailer Cleaning",
    },
    description: {
      fr: "Nettoyage professionnel pour bateaux, roulottes et véhicules récréatifs. Redonnez de l'éclat à vos équipements.",
      en: "Professional cleaning for boats, trailers, and recreational vehicles. Restore the shine to your equipment.",
    },
    features: {
      fr: ["Bateaux", "Roulottes", "VR", "Intérieur & Extérieur"],
      en: ["Boats", "Trailers", "RVs", "Interior & Exterior"],
    },
    image: null,
  },
  {
    id: "carpet-furniture",
    title: {
      fr: "Nettoyage Tapis & Meubles",
      en: "Carpet & Furniture Cleaning",
    },
    description: {
      fr: "Nettoyage professionnel de vos tapis et meubles rembourrés. Éliminez les taches, odeurs et allergènes.",
      en: "Professional cleaning of your carpets and upholstered furniture. Remove stains, odors, and allergens.",
    },
    features: {
      fr: ["Tapis", "Canapés", "Fauteuils", "Tissus d'ameublement"],
      en: ["Carpets", "Sofas", "Armchairs", "Upholstery"],
    },
    image: "469648923_122174149208108452_263683896868960210_n.jpg",
  },
];

export const ABOUT_CONTENT = {
  title: {
    fr: "Pourquoi Choisir Technivapeur?",
    en: "Why Choose Technivapeur?",
  },
  subtitle: {
    fr: "Une entreprise familiale établie à Montréal depuis 1996",
    en: "A family business established in Montreal since 1996",
  },
  intro: {
    fr: "Depuis 1996, Technivapeur aide les familles et les entreprises à retrouver des espaces propres, sains et impeccables — avec une approche humaine, des équipements professionnels, et une vraie rigueur.",
    en: "Since 1996, Technivapeur has helped families and businesses maintain clean, healthy, spotless spaces—with a human approach, professional equipment, and real attention to detail.",
  },
  sections: [
    {
      title: {
        fr: "30 ans d'expérience",
        en: "30 years of experience",
      },
      content: {
        fr: "Entreprise familiale établie à Montréal depuis 1996. Jacques Beauchesne et Stéphane Géraldet, les propriétaires, travaillent personnellement sur vos projets.",
        en: "A family business established in Montreal since 1996. Jacques Beauchesne and Stéphane Géraldet, the owners, personally work on your projects.",
      },
    },
    {
      title: {
        fr: "Équipements professionnels",
        en: "Professional equipment",
      },
      content: {
        fr: "Technologie de nettoyage à la vapeur industrielle à la fine pointe. 3 camions entièrement équipés pour vous servir rapidement.",
        en: "Cutting-edge industrial steam-cleaning technology. Three fully equipped trucks to serve you quickly.",
      },
    },
    {
      title: {
        fr: "Personnel qualifié",
        en: "Qualified team",
      },
      content: {
        fr: "Notre équipe reçoit des formations continues pour garantir un service de qualité supérieure et des résultats exceptionnels.",
        en: "Our team receives ongoing training to ensure top-quality service and exceptional results.",
      },
    },
    {
      title: {
        fr: "Satisfaction garantie",
        en: "Satisfaction guaranteed",
      },
      content: {
        fr: "Des milliers de clients satisfaits nous réfèrent à leurs proches année après année.",
        en: "Thousands of satisfied clients recommend us year after year.",
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
