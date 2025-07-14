import { NavItem } from '../types';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    path: '/',
  }
];

export const SAMPLE_CARDS = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A comprehensive project management solution with advanced analytics and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '2',
    title: 'Data Analytics Dashboard',
    description: 'Real-time data visualization dashboard with interactive charts and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    tags: ['Dashboard', 'Analytics', 'Charts'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: '3',
    title: 'Mobile App Design',
    description: 'Modern mobile application design with intuitive user interface and seamless navigation.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    tags: ['Mobile', 'UI/UX', 'Design'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-12'),
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    tags: ['E-commerce', 'Payment', 'Inventory'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-08'),
  },
];

export const APP_CONFIG = {
  name: 'Aspire Demo App',
  version: '1.0.0',
  description: 'A professional React TypeScript application for coding assessments',
  author: 'Your Name',
  repository: 'https://github.com/chirag8arora/aspire-demo-app',
}; 