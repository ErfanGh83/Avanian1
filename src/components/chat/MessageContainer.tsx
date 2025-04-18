/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import ChatBox from "../containers/chat-containers/ChatBox";
import MessageItem from "./MessageItem";
import Image from "next/image";
import { getAuthToken, getSessionId } from "@/utils/storage";
import axios from "axios";
import { Message } from "@/schema/chatDataSchema";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

export default function MessageContainer({
  setMessages,
  messages,
}: {
  setMessages: React.Dispatch<React.SetStateAction<Message[] | null>>;
  messages: Message[] | null;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);

      const token = getAuthToken();
      const sessionId = getSessionId();
      if (!sessionId || !token) {
        toast.error("لطفا ابتدا وارد شوید ", {
          autoClose: 1500,
          position: "bottom-left",
        });
        setLoading(false)
        return;
      }

      try {
        const response = await axios.get(
          `http://188.34.162.79:8789/chat/sessions/${sessionId}/history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Session-Id": sessionId,
            },
          }
        );

        setMessages(response.data);
      } catch (err: any) {
        toast.error(err?.response?.data || "خطا در دریافت پیام‌ها", {
          position: "bottom-left",
          autoClose: 1500,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [setMessages]);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-auto text-gray-600 dark:text-gray-300 text-lg">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <>
      {messages && messages.length > 0 ? (
        <div className="w-full h-full overflow-hidden flex flex-row-reverse items-center gap-6">
          <AnimatePresence>
            <motion.div
              key="owl-image"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-0 md:w-full lg:w-1/4"
            >
              <Image
                src={"/vectors/owl.svg"}
                alt="زانیار"
                width={200}
                height={200}
                className="w-32 md:w-44 lg:w-64 h-[60vh]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="w-[100%] h-[70vh] lg:w-3/4">
            <ChatBox data={messages} />
          </div>
        </div>
      ) : (
        <div className="m-auto items-center gap-2 md:gap-16 px-1 md:px-8 py-4 max-w-[90vw] md:max-w-[70vw] lg:px-16 bg-white/50 rounded-2xl flex flex-row ">
          <MessageItem sender="ai">
            فرصت طلایی رشد و شکوفایی فرزندتان در لحظات فراغت پنهان است؛ لحظاتی
            که به سرعت می‌گذرند. من زانیار، پیردانای آوانیان، با دانشی که کمتر
            جایی خواهید یافت، اینجا هستم تا نقشه راه این گنج پنهان را به شما
            نشان دهم. آیا آماده‌اید تا اولین قدم را برای تضمین آینده‌ای
            درخشان‌تر از طریق اوقات فراغت بردارید؟ سوالتان چیست؟
          </MessageItem>
          <motion.div
            key="owl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/vectors/owl.svg"}
              alt="زانیار"
              width={200}
              height={200}
              className="w-32 md:w-44 lg:w-64"
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
