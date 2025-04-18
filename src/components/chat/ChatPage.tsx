'use client'


import React, { useState } from "react";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";
import { Message } from "@/schema/chatDataSchema";
import { ToastContainer } from "react-toastify";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[] | null>(null);


  return (
    <div className="size-full pt-8 px-6 flex flex-col gap-4 overflow-x-hidden h-screen mx-auto">
      <MessageContainer messages={messages} setMessages={setMessages} />
      <MessageInput messages={messages} setMessages={setMessages} />
      <ToastContainer />
    </div>
  );
}
