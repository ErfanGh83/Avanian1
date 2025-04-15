"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Prop = {
  children: string;
  bgColor: string;
  href: string;
};

export default function QuickAccessButton({ children, bgColor, href }: Prop) {
  return (
    <Link href={href}>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 0.3,
        }}
        whileHover={{
          y: -4,
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95, y: 5, opacity: 0.9 }}
        className={`${bgColor} dark:text-black text-white max-w-64 py-6 text-xl px-20 rounded-3xl shadow-lg hover:shadow-xl`}
      >
        {children}
      </motion.button>
    </Link>
  );
}
