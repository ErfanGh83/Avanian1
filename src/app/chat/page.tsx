import ChatPage from "@/components/chat/ChatPage";
import ChatLayout from "@/components/layouts/chat-layout/ChatLayout";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <ChatLayout>
      <div className="size-full flex flex-row-reverse justify-center items-center bg-[#B3D433]">
        <div className="w-full">
          <ChatPage />
        </div>
      </div>
    </ChatLayout>
  );
}
