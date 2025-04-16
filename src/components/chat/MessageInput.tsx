"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MessageInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form className="w-full flex justify-center items-end gap-4 p-4">
      <motion.textarea
        placeholder="از زانیار بپرس..."
        animate={{
          scale: isFocused ? 1.03 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full overflow-y-hidden max-w-xl p-4 min-h-[50px] max-h-[150px] bg-[#f0f9ff] text-neutral-800 rounded-2xl border-2 border-[#a0d3f5] focus:outline-none focus:ring-2 focus:ring-[#5ec4ff] transition-all resize-none shadow-sm placeholder:text-gray-500"
      />

      <button
        type="submit"
        className="p-3 rounded-full bg-[#5ec4ff] hover:bg-[#48b1ef] text-white shadow-lg transition-all"
        aria-label="ارسال پیام"
      >
        <FaArrowUp />
      </button>
    </form>
  );
}
