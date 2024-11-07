"use client";

import React, { createContext, useState, SetStateAction } from "react";

export interface SidebarContextProps {
  isOpenSidebar: boolean;
  isOpenCard: boolean;
  setIsOpenSidebar: React.Dispatch<SetStateAction<boolean>>;
  setIsOpenCard: React.Dispatch<SetStateAction<boolean>>;
}

// Tidak perlu memberikan nilai undefined secara eksplisit
export const SidebarContext = createContext<SidebarContextProps>({
  isOpenSidebar: false,
  isOpenCard: false,
  setIsOpenCard: () => {},
  setIsOpenSidebar: () => {},
});

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);
  return (
    <SidebarContext.Provider
      value={{
        isOpenSidebar: isOpenSidebar,
        isOpenCard: isOpenCard,
        setIsOpenSidebar: setIsOpenSidebar,
        setIsOpenCard: setIsOpenCard,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
