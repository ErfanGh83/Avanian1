import React from "react";
import ChatBox from "../containers/chat-containers/ChatBox";

export default function MessageContainer() {

  const fetchedData = ["hi", "hello"]

  return (
    <ChatBox data={fetchedData} />
  );
}
