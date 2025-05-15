"use client";

import React, { useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Message } from "@/schema/chatDataSchema";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { sendMessage } from "@/lib/api/chat";
import { AxiosError } from "axios";

interface MessageInputProps {
  setMessages: React.Dispatch<React.SetStateAction<Message[] | null>>;
  messages: Message[] | null;
}

export default function MessageInput({
  setMessages,
  messages,
}: MessageInputProps) {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim() || loading) return;

    if (textareaRef.current) {
      textareaRef.current.value = "";
    }

    setMessages((prev) => [
      ...(prev ?? []),
      {
        content: text,
        role: "human",
        timeStamp: new Date().toDateString(),
      },
    ]);

    try {
      setLoading(true);

      const aiResponse: string = await sendMessage(text);

      setMessages((prev) => [
        ...(prev ?? []),
        {
          content: aiResponse,
          role: "ai",
          timeStamp: new Date().toDateString(),
        },
      ]);

      setText("");
    } catch (error: unknown) {
      // Check if error is an object with a message
      if (
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof (error as { message: string }).message === "string"
      ) {
        const typedError = error as { message: string };
        if (typedError.message === "UNAUTHENTICATED") {
          toast.error("لطفا ابتدا وارد شوید ", {
            autoClose: 1500,
            position: "bottom-left",
          });
          return;
        }
      }

      // Handle Axios error
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message ?? "خطا در ارسال پیام";

      setMessages((prev) => [
        ...(prev ?? []),
        {
          content: errorMessage,
          role: "ai",
          timeStamp: new Date().toDateString(),
        },
      ]);

      toast.error(errorMessage, {
        position: "bottom-left",
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      layout
      transition={{ duration: 0.7, type: "spring" }}
      onSubmit={handleSubmit}
      className={`w-full md:w-[600px] lg:w-3/4 lg:text-right ${
        messages && messages.length > 0 ? "lg:mr-[-3]" : ""
      } py-[2vh] min-h-[80px] h-[80px] rounded-full flex flex-row bg-white justify-center items-center gap-6 px-2 mx-auto mb-4 overflow-hidden focus-within:outline focus-within:outline-2 focus-within:outline-blue-400 focus-within:outline-offset-2`}
    >
      <textarea
        placeholder="از زانیار بپرس..."
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="focus:outline-none transition-all w-full p-4 min-h-[20px] placeholder: h-fit max-h-[200px] overflow-y-auto text-neutral-800 rounded-full resize-none shadow-sm placeholder:text-gray-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-14 md:w-28 h-fit flex flex-row gap-2 items-center justify-center px-3 py-4 rounded-full bg-[#5ec4ff] hover:bg-[#48b1ef] text-white shadow-lg transition-all disabled:opacity-60"
        aria-label="ارسال پیام"
      >
        <p className="hidden md:block text-xl">{loading ? "..." : "ارسال"}</p>
        <FaArrowUp size={24} />
      </button>
    </motion.form>
  );
}
