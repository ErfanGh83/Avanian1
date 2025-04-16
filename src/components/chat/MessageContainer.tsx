import Image from "next/image";
import React from "react";
import MessageItem from "./MessageItem";

type Prop = {
  data: string[];
};

export default function MessageContainer({ data }: Prop) {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex-1 overflow-y-auto rounded-lg bg-lightBlue p-4 mb-4">
          <div className="mb-2">👋 سلام! چطور می‌تونم کمکت کنم؟</div>
        </div>
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
