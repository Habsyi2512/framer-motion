"use client";

import React from "react";
import { useContext } from "react";
import { Bars3Icon } from "../icons/Bars3Icon";
import { SidebarContext } from "@/context/SidebarProvider";
import Link from "next/link";

export default function Header() {
  const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext);
  return (
    <header className="h-14 border-b p-2">
      <ul className="flex gap-x-2 h-full items-center justify-start">
        <li className="h-full">
          <button
            onClick={() => {
              setIsOpenSidebar(!isOpenSidebar);
            }}
            className="hover:bg-gray-200 active:bg-transparent transition-colors duration-150 aspect-square flex items-center justify-center h-full rounded-md"
          >
            <Bars3Icon className="size-6" />
          </button>
        </li>
        <li className="h-full">
          <Link href={"/drag"}>oke</Link>
        </li>
      </ul>
    </header>
  );
}
