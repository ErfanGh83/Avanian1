import React from "react";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

export default function ChatPage() {

  return (
    <div className="size-full pt-8 px-6 flex flex-col gap-4 overflow-x-hidden h-screen mx-auto">
      <MessageContainer />
      <MessageInput />
    </div>
  );
}
