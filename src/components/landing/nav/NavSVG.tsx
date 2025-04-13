"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function NavSVG() {
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme == "light") setIsDark(false);
    else setIsDark(true);
  }, [resolvedTheme]);

  return (
    <>
      <AnimatePresence>
        {!isDark && (
          <>
            <motion.img
              key="cloud1"
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -70, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src="/vectors/cloud.svg"
              alt="cloud"
              className="absolute top-8 right-64 -z-5 w-52"
            />
            <motion.img
              key="cloud2"
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -70, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src="/vectors/small-cloud.svg"
              alt="cloud"
              className="absolute top-4 left-52 -z-5 w-20"
            />
          </>
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-screen -z-10">
        <svg
          className="w-full h-60 fill-lightBlue dark:fill-darkBlue"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,128L48,128C96,128,192,128,288,112C384,96,480,64,576,90.7C672,117,768,203,864,229.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
    </>
  );
}
