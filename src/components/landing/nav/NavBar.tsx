"use client";

// import ThemeSwitchButton from "@/components/buttons/ThemeSwitcher/ThemeSwitchButton";
import React, { ReactNode, useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavSVG from "./NavSVG";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState("");
  const pathname = usePathname();

  return (
    <>
      <NavSVG />
      <nav className="w-full flex flex-row h-20 justify-between items-center px-1 md:px-6 gap-2">
        <Image
          src="/images/logo.png"
          alt="Avanian"
          width={200}
          height={200}
          className="w-28 z-10"
        />

        <div className="flex flex-row gap-3 md:gap-3 lg:gap-8 text-base items-center">
          {buttons.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link href={item.link} key={item.text}>
                <motion.div
                  onClick={() => setIsClicked(item.text)}
                  whileHover={{ scale: 1.2, y: -1 }}
                  transition={{
                    type: "spring",
                    duration: 0.3,
                  }}
                  className="relative flex items-center md:gap-2 cursor-pointer md:px-1 pb-1 text-white dark:text-gray-200"
                >
                  {isClicked == item.text ? (
                    <svg
                      width="20"
                      height="25"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-spin fill-white"
                    >
                      <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" />
                    </svg>
                  ) : (
                    <>
                      <span className="hidden md:block">{item.icon}</span>
                      <span className="text-xs sm:text-sm md:text-lg">
                        {item.text}
                      </span>
                    </>
                  )}

                  <motion.div
                    layout
                    transition={{ duration: 0.3 }}
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full ${
                      isActive ? "bg-lightGreen" : "bg-transparent"
                    }`}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="w-4 sm:w-16">{/* <ThemeSwitchButton /> */}</div>
      </nav>
    </>
  );
}

const buttons: {
  icon: ReactNode;
  text: string;
  link: string;
}[] = [
  { icon: <FaHome />, text: "صفحه اصلی", link: "/" },
  { icon: <FaShop />, text: "فروشگاه", link: "/shop" },
  { icon: <FaMessage />, text: "چت بات", link: "/chat" },
  { icon: <FaUser />, text: "ورود", link: "/login" },
];
