"use client";

import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Props = {
  children: string;
  sender: "ai" | "human";
};

export default function MessageItem({ sender, children }: Props) {
  const isHuman = sender === "human";

  return (
    <motion.div
      className={`w-full flex ${
        isHuman ? "flex-row items-end" : "flex-row-reverse items-start"
      }`}
      initial={{ opacity: 0, x: isHuman ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isHuman ? -40 : 40 }}
      transition={{
        duration: 0.4,
        ease: "linear",
        stiffness: 100,
      }}
    >
      <div
        className={`w-full h-full items-end max-w-2xl flex gap-2 overflow-hidden 
          ${isHuman ? "flex-row" : "flex-row-reverse"}`}
      >
        <div
          className={`max-w-[90%] h-fit min-h-[75%] bg-t/30 relative rounded-t-xl ${
            isHuman
              ? "bg-dark2 rounded-bl-xl ml-10"
              : "bg-avanianBlue rounded-br-xl mr-1"
          }`}
        >
          <div className="w-full px-2 md:px-6 py-3 break-words overflow-wrap-anywhere">
            <p className="text-sm lg:text-lg text-justify">
              <ReactMarkdown>{children}</ReactMarkdown>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
