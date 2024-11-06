"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalculatorIcon } from "../icons/CalculatorIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { FolderPlusIcon } from "../icons/FolderPlus";

type IconObject = {
  name: string;
  icon: React.ReactNode;
};

export default function Sidebar() {
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
      initial={{ width: 0, padding: 0 }}
      animate={{ width: 250, padding: 20 }}
      className="bg-gray-100 overflow-hidden"
    >
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex gap-x-2 items-center py-2">
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
