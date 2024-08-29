import React, { FC, useState, createContext } from 'react';
import { SidebarContextType } from './models/SidebarContextType';
interface SidebarProviderProps {
  children: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContextType>(
  {} as SidebarContextType
);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
