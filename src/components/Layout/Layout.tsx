import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { LayoutProps } from '../../types';
import { useAppStore } from '../../store/useAppStore';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sidebarCollapsed, toggleSidebar} = useAppStore();

  return (
    <div className="flex h-screen bg-gray-50">

      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}; 