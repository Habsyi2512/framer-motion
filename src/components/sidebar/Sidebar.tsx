"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CalculatorIcon } from "../icons/CalculatorIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { FolderPlusIcon } from "../icons/FolderPlus";
import { SidebarContextType } from "@/context/SidebarContextType";
import { Bars3Icon } from "../icons/Bars3Icon";

type IconObject = {
  name: string;
  icon: React.ReactNode;
};

export default function Sidebar() {
  const { isOpenCard, setIsOpenCard } = useContext(SidebarContextType);
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
      initial={{ width: 50, padding: 20 }}
      animate={{ width: isOpenCard ? 250 : 20, padding: 20 }}
      className="bg-gray-100 overflow-hidden"
    >
      <ul>
        <button onClick={() => setIsOpenCard(!isOpenCard)}>
          <Bars3Icon className="size-6" />
        </button>
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
