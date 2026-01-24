export interface NavigationItem {
  name: string;
  href: string;
}

export type Language = "fr" | "en";

export interface LocalizedContent<T> {
  fr: T;
  en: T;
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface UseCase {
  id: number;
  category: string;
  title: string;
  description: string;
  metrics?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  strengths: string[];
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
