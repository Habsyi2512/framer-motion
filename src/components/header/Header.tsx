"use client";

import React from "react";
import { useContext } from "react";
import { Bars3Icon } from "../icons/Bars3Icon";
import { SidebarContext } from "@/context/SidebarProvider";

export default function Header() {
  const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext);
  return (
    <header className="h-14 border-b p-2">
      <button
        onClick={() => {
          setIsOpenSidebar(!isOpenSidebar);
        }}
        className="hover:bg-gray-200 active:bg-transparent transition-colors duration-150 aspect-square flex items-center justify-center h-full rounded-md"
      >
        <Bars3Icon className="size-6" />
      </button>
    </header>
  );
}
