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


export interface CardProps {
  card: Card;
  onClick: (card: Card) => void;
}

export interface CardActionsProps {
  frozen: boolean;
  onFreeze: () => void;
  onSetLimit: () => void;
  onAddGPay: () => void;
  onReplace: () => void;
  onDeactivate: () => void;
}

export interface CardDetailsProps {
  expanded: boolean;
  onToggle: () => void;
}

export interface Transaction {
  merchant: string;
  date: string;
  amount: number;
  type: string;
  icon: string;
}

export interface TransactionsProps {
  transactions: Transaction[];
  expanded: boolean;
  onToggle: () => void;
}

export interface AddCardModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (card: CardType) => void;
}

export interface CardType {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
} 

export interface Transaction {
  merchant: string;
  date: string;
  amount: number;
  type: string;
  icon: string;
}

export interface CardType {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
}
