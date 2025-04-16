"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark3 w-full ">
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: .5 }}
        className="p-2 w-full text-center text-white text-sm md:text-lg"
      >
        © 2025 شرکت آوانیان. تمامی حقوق محفوظ است. استفاده از مطالب فقط با ذکر
        منبع مجاز است.
      </motion.h2>
    </footer>
  );
}
