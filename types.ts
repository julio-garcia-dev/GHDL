import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

export enum ContactMethod {
  PHONE = 'Phone',
  EMAIL = 'Email',
  VIDEO = 'Video Call',
  TEXT = 'Text Message'
}

export interface AccessConfig {
  highContrast: boolean;
  largeText: boolean;
  dyslexiaFriendly: boolean;
}

export interface AiAssistantResponse {
  suggestedPracticeArea: string;
  helpfulTip: string;
}
