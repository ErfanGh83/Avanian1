import React from "react";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

export default function ChatPage() {
  const fetchData: string[] = [];

  return (
    <div className="flex flex-col overflow-hidden h-screen bg-[#B3D433] p-4">
      <MessageContainer data={fetchData} />
      <MessageInput />
    </div>
  );
}
