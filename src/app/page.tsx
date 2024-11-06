"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@/components/icons/XMarkIcon";

export default function Home() {
  const [state, setState] = useState<boolean>(false);
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <button onClick={() => setState(!state)}>click</button>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "calc(100vw - 50%)" }}
      />
      <AnimatePresence>
        {state && (
          <motion.div
            style={{ originX: 0.5 }}
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
                onClick={() => setState(false)}
                className="group absolute hover:bg-white/50 transition-colors duration-200 p-2 rounded-full z-10 top-5 right-5"
              >
                <XMarkIcon className="size-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
