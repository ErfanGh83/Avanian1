import React from "react";
import OwlPfp from "./owl-pfp";

type Props = {
  children: string;
  sender: "bot" | "user";
};

export default function MessageItem({ sender, children }: Props) {
  return (
    <div
      className={`w-full flex 
        ${sender === "user" ? "flex-row items-end" : "flex-row-reverse items-start"}`}
    >
      <div
        className={`w-full h-full max-w-2xl flex gap-2 overflow-hidden 
          ${sender === "user" ? "flex-row" : "flex-row-reverse"}`}
      >
        <div
          className=" h-full flex flex-col items-end justify-end"
        >
          {
            sender === "bot" ?
              <OwlPfp />
              :
              <div
                className="size-16 rounded-full flex items-center justify-center bg-blue-300"
              >

              </div>
          }
        </div>
        <div
          className={`max-w-3/4 bg-t/30 relative rounded-t-xl ${sender == "user" ? "bg-dark2 rounded-bl-xl" : "bg-avanianBlue rounded-br-xl"
            }`}
        >
          <div
            className={`absolute ${sender == "bot" ? "left-[-4px] top-[45px]" : "right-[-4px]"
              } bottom-0`}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 30 40"
              xmlns="http://www.w3.org/2000/svg"
              className={`${sender == "user" ? "fill-dark2 rotate-180" : "fill-avanianBlue"
                }`}
            >
              <polygon points="0,5 10,0 10,10" />
            </svg>
          </div>

          <h3 className="px-6 py-3">{children}</h3>
        </div>
      </div>
    </div>
  );
}
