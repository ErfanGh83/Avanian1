import Image from "next/image";
import React from "react";
import MessageItem from "./MessageItem";
import ChatBox from "../containers/chat-containers/ChatBox";

type Prop = {
  data: string[];
};

export default function MessageContainer({ data }: Prop) {
  return (
    <>
      {1 > 0 ? (
        <ChatBox />
      ) : (
        <div className="m-auto items-center gap-4 px-8 md:px-16 py-32 lg:px-32 bg-white/50 rounded-2xl flex flex-row">
          <MessageItem sender="bot">سلام من زانیار هستم! چطور می‌تونم کمکت کنم؟</MessageItem>
          <Image
            src={"/vectors/owl.svg"}
            alt="زانیار"
            width={200}
            height={200}
            className="w-32 md:w-44 lg:w-64"
          />
        </div>
      )}
    </>
  );
}
