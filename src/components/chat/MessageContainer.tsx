import React from "react";
import ChatBox from "../containers/chat-containers/ChatBox";
import MessageItem from "./MessageItem";
import Image from "next/image";

export default function MessageContainer() {
  const fetchedData = ["hi", "hello"];

  return (
    <>
      {true ? (
        <div className="w-full h-full overflow-hidden flex flex-row-reverse items-center gap-6">
          <div className="hidden lg:block w-0 md:w-full lg:w-1/4">
            <Image
              src={"/vectors/owl.svg"}
              alt="زانیار"
              width={200}
              height={200}
              className="w-32 md:w-44 lg:w-64 h-[60vh]"
            />
          </div>

          <div className="w-[100%] h-[70vh] lg:w-3/4">
            <ChatBox data={fetchedData} />
          </div>
        </div>
      ) : (
        <div className="m-auto items-center gap-2 md:gap-16 px-1 md:px-8 py-4 max-w-[90vw] md:max-w-[70vw] lg:px-16 bg-white/50 rounded-2xl flex flex-row ">
          <MessageItem sender="bot">
            فرصت طلایی رشد و شکوفایی فرزندتان در لحظات فراغت پنهان است؛ لحظاتی
            که به سرعت می‌گذرند. من زانیار، پیردانای آوانیان، با دانشی که کمتر
            جایی خواهید یافت، اینجا هستم تا نقشه راه این گنج پنهان را به شما
            نشان دهم. آیا آماده‌اید تا اولین قدم را برای تضمین آینده‌ای
            درخشان‌تر از طریق اوقات فراغت بردارید؟ سوالتان چیست؟
          </MessageItem>
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
