"use client";

// import ThemeSwitchButton from "@/components/buttons/ThemeSwitcher/ThemeSwitchButton";
import React, { ReactNode } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavSVG from "./NavSVG";

export default function NavBar() {
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
          className="w-28"
        />

        <div className="flex flex-row gap-3 md:gap-3 lg:gap-8 text-base items-center">
          {buttons.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link href={item.link} key={item.text}>
                <motion.div
                  whileHover={{ scale: 1.2, y: -1 }}
                  transition={{
                    type: "spring",
                    duration: 0.3,
                  }}
                  className="relative flex items-center gap-2 cursor-pointer px-1 pb-1 text-white dark:text-gray-200"
                >
                  <span className="hidden md:block">{item.icon}</span>
                  <span>{item.text}</span>

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

        <div className="w-16">{/* <ThemeSwitchButton /> */}</div>
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
