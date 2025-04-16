import ChatPage from "@/components/chat/ChatPage";
import ChatLayout from "@/components/layouts/chat-layout/ChatLayout";
import React from "react";

export default function page() {
  return (
    <ChatLayout>
      <div className="size-full overflow-hidden flex flex-row-reverse justify-center items-center bg-[#B3D433]">

        <div
          className="w-2/5"
        >
          
        </div>

        <div
          className="w-3/5"
        >
          <ChatPage />
        </div>

      </div>
    </ChatLayout>
  );
}
