export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  benefits: string[];
  specifications: { label: string; value: string }[];
  category: string;
  origin: string;
  extractionMethod: string;
}


export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
  suffix?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  image: string;
  description: string;
}
