import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, User, Theme, Notification } from '../types';

interface AppStore extends AppState {
  setUser: (user: User | null) => void;
  setTheme: (theme: Theme) => void;
  toggleSidebar: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;
  logout: () => void;
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
      notifications: [],

      // Actions
      setUser: (user) => set({ user }),
      
      setTheme: (theme) => set({ theme }),
      
      toggleSidebar: () => set((state) => ({ 
        sidebarCollapsed: !state.sidebarCollapsed 
      })),
      
      addNotification: (notification) => set((state) => ({
        notifications: [
          {
            ...notification,
            id: Date.now().toString(),
            timestamp: new Date(),
          },
          ...state.notifications,
        ],
      })),
      
      markNotificationAsRead: (id) => set((state) => ({
        notifications: state.notifications.map((notification) =>
          notification.id === id
            ? { ...notification, isRead: true }
            : notification
        ),
      })),
      
      clearNotifications: () => set({ notifications: [] }),
      
      logout: () => set({
        user: null,
        notifications: [],
      }),
    }),
    {
      name: 'aspire-app-storage',
      partialize: (state) => ({
        user: state.user,
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
        notifications: state.notifications,
      }),
    }
  )
); 