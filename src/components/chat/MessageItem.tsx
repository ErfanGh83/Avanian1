import React from "react";

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
        className={`w-full h-full items-end max-w-2xl flex gap-2 overflow-hidden 
          ${sender === "user" ? "flex-row" : "flex-row-reverse"}`}
      >

        <div
          className={`max-w-[90%] h-fit min-h-[75%] bg-t/30 relative rounded-t-xl ${
            sender == "user" ? "bg-dark2 rounded-bl-xl ml-10" : "bg-avanianBlue rounded-br-xl mr-10"
          }`}
        >

          <div className="w-full p-4 break-words overflow-wrap-anywhere">
            <h3>{children}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}