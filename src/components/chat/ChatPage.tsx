import React from "react";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

export default function ChatPage() {
  const fetchData: string[] = [];

  return (
    <div className="size-full px-6 flex flex-col overflow-hidden h-screen mx-auto">
      <MessageContainer data={fetchData} />
      <MessageInput />
    </div>
  );
}
