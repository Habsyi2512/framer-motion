"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CalculatorIcon } from "../icons/CalculatorIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { FolderPlusIcon } from "../icons/FolderPlus";
import { SidebarContext } from "@/context/SidebarProvider";

type IconObject = {
  name: string;
  icon: React.ReactNode;
};

export default function Sidebar() {
  const { isOpenSidebar } = useContext(SidebarContext);
  const data: IconObject[] = [
    {
      name: "Home",
      icon: <HomeIcon className="size-6" />,
    },
    {
      name: "Add Folder",
      icon: <FolderPlusIcon className="size-6" />,
    },
    {
      name: "Calculatir",
      icon: <CalculatorIcon className="size-6" />,
    },
  ];
  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{
        width: isOpenSidebar ? 250 : 0,
      }}
      className="bg-gray-100 overflow-hidden"
    >
      <ul className="p-2">
        {data.map((item, index) => (
          <li key={index} className="flex gap-x-2 items-center py-2">
            <div>{item.icon}</div>
            <p className="truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
