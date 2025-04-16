import React from "react";
import QuickAccessButton from "./QuickAccessButton";

export default function QuickAccessSection() {
  return (
    <>
      <div className="relative mb-[10vh] md:mb-[10vh] bg-landing_bg2 dark:bg-turquoise items-center flex flex-col md:flex-row gap-6 justify-around py-8">
        <div className="absolute bg-landing_bg2 dark:bg-turquoise w-full h-[200px] top-[-150px] z-[-3]" />

        {buttonList.map((item) => (
          <QuickAccessButton
            key={item.text}
            href={item.href}
            bgColor={item.bgColor}
          >
            {item.text}
          </QuickAccessButton>
        ))}

        <div className="w-full h-32 absolute bottom-[-100px] md:bottom-[-100px] z-[-2]">
          <svg
            className=" fill-landing_bg2 dark:fill-turquoise"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M0,96L80,101.3C160,107,320,117,480,133.3C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
          </svg>
        </div>
      </div>
    </>
  );
}

const buttonList: {
  text: string;
  href: string;
  bgColor: string;
}[] = [
  { text: "ثبت نام", bgColor: "bg-landing_bg1", href: "#login" },
  { text: "چت بات", bgColor: "bg-landing_bg3", href: "#chat" },
  { text: "فروشگاه", bgColor: "bg-landing_bg4", href: "#shop" },
];
