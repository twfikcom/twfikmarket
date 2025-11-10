import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WebsiteService {
  id: string;
  name: string;
  price: string;
  shortDescription: string;
  features: string[];
  description: string;
  portfolio: { src: string; alt: string }[];
  faq: FaqItem[];
  popular?: boolean;
}

export interface AiPrompt {
  id: string;
  name: string;
  price: string;
  category: string;
  shortDescription: string;
  description: string;
  promptText: string;
  sampleOutput: string;
  isImageSample?: boolean;
  faq: FaqItem[];
}

export interface OnlineTool {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  shortDescription: string;
  description: string;
  features: string[];
  price: string;
  previewImage: string;
  faq: FaqItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string; 
}

// For homepage services section
export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
