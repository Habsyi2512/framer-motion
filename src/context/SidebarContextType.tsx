"use client";

import React, { createContext, useState, SetStateAction } from "react";

export interface SidebarContextTypeProps {
  isOpenSidebar: boolean;
  isOpenCard: boolean;
  setIsOpenSidebar: React.Dispatch<SetStateAction<boolean>>;
  setIsOpenCard: React.Dispatch<SetStateAction<boolean>>;
}

// Tidak perlu memberikan nilai undefined secara eksplisit
export const SidebarContextType = createContext<SidebarContextTypeProps>({
  isOpenSidebar: false,
  isOpenCard: false,
  setIsOpenCard: () => {},
  setIsOpenSidebar: () => {},
});

export default function SideBarContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);
  return (
    <SidebarContextType.Provider
      value={{
        isOpenSidebar: isOpenSidebar,
        isOpenCard: isOpenCard,
        setIsOpenSidebar: setIsOpenSidebar,
        setIsOpenCard: setIsOpenCard,
      }}
    >
      {children}
    </SidebarContextType.Provider>
  );
}
