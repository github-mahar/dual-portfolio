import { links as baseLinks } from './links';

export interface Project {
  category: 'shopify' | 'website';
  meta: string;
  title: string;
  description: string;
  stack: string[];
  links?: { label: string; url: string }[];
  image?: string;
}

export const projects: Project[] = [
  {
    category: 'shopify',
    meta: 'Live brand · Production',
    title: 'Imrozia Serene — Shopify Storefront & Automation',
    description: 'Theme customization, COD order automation via Make.com, payment gateway fixes (Safepay/Payfy), email automation, and dynamic shipping rate tooling for a brand shipping real orders, not a demo store.',
    stack: ['Shopify Liquid', 'Make.com', 'REST APIs', 'Payment Gateways'],
    links: [{ label: 'View Live Store →', url: 'https://imroziaserene.com/' }]
  },
  {
    category: 'shopify',
    meta: 'Self-built product · Gumroad',
    title: 'MAEVEN — Shopify OS 2.0 Theme',
    description: 'A complete Shopify OS 2.0 theme built from scratch — 35+ custom sections, vanilla JS, mobile-first. Built to be sold, not just to demo skills.',
    stack: ['Shopify OS 2.0', 'Vanilla JS', 'Liquid'],
    links: [{ label: 'View on Gumroad →', url: baseLinks.maevenGumroad }]
  },
  {
    category: 'website',
    meta: 'Web platform · Full-stack',
    title: 'EzzCode — Tech Training & Internship Platform',
    description: 'A platform built to take beginners through structured tech training, verifiable certificates, and real-world project experience with mentorship. Built end-to-end — frontend, auth, and data layer.',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    links: [
      { label: 'View Live Project →', url: 'https://ezzcode.online/' },
      { label: 'View GitHub Repo →', url: 'https://github.com/github-mahar/EzzCode' }
    ]
  },
  {
    category: 'website',
    meta: 'Business website',
    title: 'IndexWise Research — Academic Research Services Site',
    description: 'A responsive site for an English Literature academic research service — built utility-first with Tailwind, custom branding on top, structured for static deployment and fast load times.',
    stack: ['React', 'Tailwind CSS', 'Static Deployment'],
    image: '/Index_Wise.png',
    links: [{ label: 'View GitHub Repo →', url: 'https://github.com/github-mahar/IndexWise-Research' }]
  },
  {
    category: 'website',
    meta: 'Client project',
    title: 'Aliyan\'s Portfolio — Client Portfolio Website',
    description: 'A personal portfolio site built for a client to showcase their professional work and skills.',
    stack: ['React.js', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
    links: [
      { label: 'View Live Project →', url: 'https://aliyan-portfolio-chi.vercel.app/' },
      { label: 'View GitHub Repo →', url: 'https://github.com/github-mahar/Aliyan_Portfolio' }
    ]
  }
];
