"use client";

import React from "react";
import Header from "./header/Header";
import MainContent from "./MainContent";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarProvider";

export default function Main() {
  const { isOpenSidebar } = useContext(SidebarContext);
  return (
    <div className={`w-full min-h-screen overflow-hidden`}>
      <Header />
      <MainContent />
    </div>
  );
}
