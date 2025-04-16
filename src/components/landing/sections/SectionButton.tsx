"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: string;
  href: string;
};

export default function SectionButton({ children, href }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <Link href={href}>
      <motion.button
        className="flex items-center justify-center gap-2 px-6 py-3 bg-turquoise dark:bg-dark2 text-white my-6 rounded-3xl disabled:opacity-60 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.2, y: -10, opacity: 0.95 }}
        whileTap={{ scale: 0.9, y: -5 }}
        transition={{ duration: 0.3 }}
        disabled={isClicked}
        onClick={() => setIsClicked(true)}
      >
        {isClicked ? (
          <svg
            width="90"
            height="25"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin fill-white"
          >
            <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" />
          </svg>
        ) : (
          <span>{children}</span>
        )}
      </motion.button>
    </Link>
  );
}
