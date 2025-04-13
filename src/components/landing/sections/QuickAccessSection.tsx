"use client";

import React from "react";
import { motion } from "framer-motion";

export default function QuickAccessSection() {
  return (
    <>
      <div className="relative bg-landing_bg2 dark:bg-turquoise items-center flex flex-col md:flex-row gap-6 justify-around py-8">
        <div className="absolute bg-landing_bg2 dark:bg-turquoise w-full h-64 top-[-17vh] z-[-10]" />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-landing_bg1 dark:text-black text-white max-w-64 py-6 text-xl px-20 rounded-3xl shadow-lg hover:shadow-xl"
        >
          ثبت نام
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-landing_bg3 dark:text-black text-white max-w-64 py-6 text-xl px-20 rounded-3xl shadow-lg hover:shadow-xl"
        >
          چت بات
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-landing_bg4 dark:text-black text-white max-w-64 py-6 text-xl px-20 rounded-3xl shadow-lg hover:shadow-xl"
        >
          فروشگاه
        </motion.button>
        <div className="w-full h-20 absolute bottom-[10] z-[-4]">
          <svg
            className=" fill-landing_bg2 dark:fill-turquoise"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M0,96L80,101.3C160,107,320,117,480,133.3C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
