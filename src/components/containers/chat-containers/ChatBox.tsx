'use client'

import MessageItem from "@/components/chat/MessageItem";
import { Message } from "@/schema/chatDataSchema";
import React, { useEffect, useRef } from "react";

type Prop = {
  data: Message[];
};

const ChatBox = ({ data }: Prop) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <div
      ref={chatBoxRef}
      className="w-full transition-all h-[calc(84vh-6rem)] overflow-x-hidden p-4 flex flex-col gap-4 mt-[30px] md:mt-[20px] rounded-xl text-white bg-orange-500/80 overflow-y-auto"
    >
      {data.map((item) => (
        <MessageItem sender={item.role} key={item.timeStamp}>
          {item.content}
        </MessageItem>
      ))}
    </div>
  );
};

export default ChatBox;
