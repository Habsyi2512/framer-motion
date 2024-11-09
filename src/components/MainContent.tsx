"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "./icons/XMarkIcon";
import { SidebarContext } from "@/context/SidebarProvider";
export default function MainContent() {
  const { isOpenCard, setIsOpenCard } = useContext(SidebarContext);

  return (
    <div className="relative h-[calc(100vh-56px)]">
      <div className="absolute grid grid-cols-4 -z-10 gap-0 top-0 left-0 w-full h-screen">
        <Image
          src={"/ooorganize.svg"}
          width={1024}
          height={574}
          alt="oorganize"
          className="w-full"
        />
        <Image
          src={"/ooorganize.svg"}
          width={1024}
          height={574}
          alt="oorganize"
          className="w-full"
        />
        <Image
          src={"/ooorganize.svg"}
          width={1024}
          height={574}
          alt="oorganize"
          className="w-full"
        />
        <Image
          src={"/ooorganize.svg"}
          width={1024}
          height={574}
          alt="oorganize"
          className="w-full"
        />
      </div>
      <div className="h-full w-full">
        <button onClick={() => setIsOpenCard(!isOpenCard)}>open</button>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "calc(100vw - 50%)" }}
        />
        <AnimatePresence>
          {isOpenCard && (
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
                  onClick={() => setIsOpenCard(false)}
                  className="group absolute hover:bg-white/50 transition-colors duration-200 p-2 rounded-full z-10 top-5 right-5"
                >
                  <XMarkIcon className="size-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
