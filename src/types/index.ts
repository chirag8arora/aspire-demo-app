// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

// Card/Content types
export interface Card {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Theme types
export interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
}

// App state types
export interface AppState {
  user: User | null;
  theme: Theme;
  sidebarCollapsed: boolean;
  notifications: Notification[];
}

// Notification types
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

// Component prop types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}


export interface CardContainerProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
  loading?: boolean;
}

export interface CardProps {
  card: Card;
  onClick: (card: Card) => void;
} 