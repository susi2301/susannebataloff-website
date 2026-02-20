export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  navLinks: { href: string; text: string; children?: { text: string; href: string }[] }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  slug: string;
  summary: string;
  category: string;
  info: string;
  description: string;
  image: string;
  gallery?: string[];
  techStack?: string[];
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  navLinks: { href: string; text: string; children?: { text: string; href: string }[] }[];
}