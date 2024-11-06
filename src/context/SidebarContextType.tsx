"use client";

import React, { createContext, useState, SetStateAction } from "react";

export interface SidebarContextTypeProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<SetStateAction<boolean>>;
}

// Tidak perlu memberikan nilai undefined secara eksplisit
export const SidebarContextType = createContext<SidebarContextTypeProps>({
  isOpenSidebar: false,
  setIsOpenSidebar: () => {},
});

export default function SideBarContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  return (
    <SidebarContextType.Provider
      value={{
        isOpenSidebar: isOpenSidebar,
        setIsOpenSidebar: setIsOpenSidebar,
      }}
    >
      {children}
    </SidebarContextType.Provider>
  );
}
