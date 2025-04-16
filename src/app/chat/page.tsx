import ChatPage from "@/components/chat/ChatPage";
import ChatLayout from "@/components/layouts/chat-layout/ChatLayout";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <ChatLayout>
      <div className="size-full overflow-hidden flex flex-row-reverse justify-center items-center bg-[#B3D433]">

        <div
          className="w-full xl:w-1/4"
        >
          <Image
            src={"/vectors/owl.svg"}
            alt="زانیار"
            width={200}
            height={200}
            className="w-32 md:w-44 lg:w-64"
          />
        </div>

        <div
          className="w-full xl:w-3/4"
        >
          <ChatPage />
        </div>

      </div>
    </ChatLayout>
  );
}
