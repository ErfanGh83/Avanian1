"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MessageInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form className="w-full max-w-[1000px] flex justify-center items-center gap-4 p-4 mx-auto">
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
        className="w-full p-4 min-h-[20px] h-fit max-h-[200px] overflow-y-auto bg-[#f0f9ff] text-neutral-800 rounded-2xl border-2 border-[#a0d3f5] focus:outline-none focus:ring-2 focus:ring-[#5ec4ff] transition-all resize-none shadow-sm placeholder:text-gray-500"
      />

      <button
        type="submit"
        className=" size-12 flex items-center justify-center p-3 rounded-full bg-[#5ec4ff] hover:bg-[#48b1ef] text-white shadow-lg transition-all"
        aria-label="ارسال پیام"
      >
        <FaArrowUp />
      </button>
    </form>
  );
}
