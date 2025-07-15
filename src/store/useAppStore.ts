import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, User, Theme } from '../types';

interface AppStore extends AppState {
  setUser: (user: User | null) => void;
  setTheme: (theme: Theme) => void;
  toggleSidebar: () => void;
}

const defaultTheme: Theme = {
  mode: 'light',
  primaryColor: '#3b82f6',
  secondaryColor: '#64748b',
};

const defaultUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  role: 'admin',
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: defaultUser,
      theme: defaultTheme,
      sidebarCollapsed: false,
  
      // Actions
      setUser: (user) => set({ user }),
      
      setTheme: (theme) => set({ theme }),
      
      toggleSidebar: () => set((state) => ({ 
        sidebarCollapsed: !state.sidebarCollapsed 
      })),
    
    }),
    {
      name: 'aspire-app-storage',
      partialize: (state) => ({
        user: state.user,
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
      }),
    }
  )
); 