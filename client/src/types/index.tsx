export interface SiteMeta {
  siteTitle: string;
  ownerName: string;
  year: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  img?: string;
  role?: string; // Added role property (e.g., "Web Application", "Microservices", "API")
}

export interface Service {
  icon: string;
  title: string;
  text: string;
}