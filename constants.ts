import { Scale, HeartHandshake, Building2, GraduationCap, Users, ShieldCheck } from 'lucide-react';
import { ServiceItem, Testimonial } from './types';

export const BRAND_NAME = "G.H. Disability Law Group, PLLC";
export const BRAND_MOTTO = "Inclusive advocacy. Disability Justice in action.";

export const SERVICES: ServiceItem[] = [
  {
    id: 'employment',
    title: 'Employment Discrimination',
    description: 'Advocating for reasonable accommodations and fighting against wrongful termination based on disability.',
    icon: Building2
  },
  {
    id: 'education',
    title: 'Education Rights (IDEA/504)',
    description: 'Supporting students and parents in securing IEPs, 504 plans, and inclusive educational environments.',
    icon: GraduationCap
  },
  {
    id: 'housing',
    title: 'Housing Justice',
    description: 'Ensuring accessible housing rights and fighting eviction or discrimination from landlords.',
    icon: Users
  },
  {
    id: 'ssdi',
    title: 'Social Security & Benefits',
    description: 'Navigating the complex appeals process for SSDI and SSI with dignity and perseverance.',
    icon: ShieldCheck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "They didn't just handle my case; they understood my lived experience. I never felt talked down to.",
    author: "Sarah M.",
    role: "Former Client"
  },
  {
    id: 't2',
    text: "Finally, a law firm that prioritizes accessibility from the first phone call to the final settlement.",
    author: "James P.",
    role: "Disability Rights Advocate"
  }
];
