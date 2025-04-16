"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

const stars: { top: string; left: string }[] = [
  { top: "18px", left: "150px" },
  { top: "40px", left: "250px" },
  { top: "60px", left: "350px" },
  { top: "25px", left: "480px" },
  { top: "90px", left: "800px" },
  { top: "120px", left: "950px" },
  { top: "35px", left: "1150px" },
  { top: "100px", left: "1100px" },
  { top: "50px", left: "1300px" },
];

export default function NavSVG() {
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
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
              transition={{ duration: 0.7 }}
              src="/vectors/cloud.svg"
              alt="cloud"
              className="hidden sm:block absolute top-[10%] lg:top-[8%] right-[15%] xl:right-[20%] -z-5 sm:w-44 md:w-52"
            />
            <motion.img
              key="cloud2"
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -70, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src="/vectors/small-cloud.svg"
              alt="cloud"
              className="hidden sm:block absolute top-4 left-[5%] md:left-[10%] -z-5 w-20"
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDark && (
          <>
            {stars.map((star, i) => (
              <motion.div
                key={`star-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="absolute bg-white rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: star.top,
                  left: star.left,
                  zIndex: -5,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-screen z-[-1]">
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
