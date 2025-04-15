import React from "react";

type Props = {
  children: string;
  sender: "bot" | "user";
};

export default function MessageItem({ sender, children }: Props) {
  return (
    <div
      className={`bg-t/30 relative rounded-md ${
        sender == "user" ? "bg-dark2" : "bg-avanianBlue"
      }`}
    >
      <div
        className={`absolute ${
          sender == "bot" ? "left-[-5]" : "right-[-4]"
        } bottom-0`}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            sender == "user" ? "fill-dark2 rotate-180" : "fill-avanianBlue"
          }`}
        >
          <polygon points="0,5 10,0 10,10" />
        </svg>
      </div>

      <h3 className="p-5 ">{children}</h3>
    </div>
  );
}
