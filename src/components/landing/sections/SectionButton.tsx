"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: string;
  href: string;
};

export default function SectionButton({children, href}: Props) {
  return (
    <Link href={href}>
      <motion.button
        className="px-8 py-3 bg-turquoise dark:bg-dark2 text-white my-6 rounded-3xl"
        whileHover={{ scale: 1.2, y: -10, opacity: 0.95 }}
        whileTap={{ scale: 0.9, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.button>
    </Link>
  );
}
