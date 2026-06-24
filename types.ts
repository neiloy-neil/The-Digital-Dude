import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
}

// New type for differentiators on homepage
export interface Differentiator {
  title: string;
  description: string;
  icon: string;
}

// New type for team members on about page
export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

// New type for milestones on about page
export interface Milestone {
  year: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
  clientLogo?: string;
  keyFeatures?: string[];
  // Merged properties from the former CaseStudyDetail type
  techStack: string[];
  metrics: Metric[];
  gallery: string[];
  industry?: string;
  country?: string;
  status?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface ServiceSubsection {
  title: string;
  description:string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  ctaText?: string;
  subsections?: ServiceSubsection[];
}

interface Metric {
  value: string;
  label: string;
}

export interface ServiceDetail {
  features: string[];
  modules: string[];
  outcomes: string[];
}

export interface ProcessStep {
  step: number;
  title:string;
  description: string; // Short description for the nav/accordion header
  icon: string;
  details: string; // Long description for the content panel
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  logo: string;
  caseStudyId?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  tags: string[];
  category: string;
}