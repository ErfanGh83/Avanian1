import ChatPage from "@/components/chat/ChatPage";
import React from "react";

export default function page() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-row-reverse justify-center items-center bg-[#B3D433]">

      <div
        className="w-1/4 hidden"
      >

      </div>

      <div
        className="w-full"
      >
        <ChatPage />
      </div>

    </div>
  );
}
