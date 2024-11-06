"use client";

import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "./icons/XMarkIcon";
import { SidebarContextType } from "@/context/SidebarContextType";
export default function MainContent() {
  const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContextType);

  return (
    <div className="min-h-screen rounded-l-lg border-l border-gray-900/20 w-full flex items-center justify-center">
      <button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>open</button>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "calc(100vw - 50%)" }}
      />
      <AnimatePresence>
        {isOpenSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="w-full h-screen fixed flex items-center justify-center top-0 left-0 p-2 bg-black/30 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-3xl bg-black text-white rounded-2xl h-[500px] relative"
            >
              <button
                onClick={() => setIsOpenSidebar(false)}
                className="group absolute hover:bg-white/50 transition-colors duration-200 p-2 rounded-full z-10 top-5 right-5"
              >
                <XMarkIcon className="size-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
