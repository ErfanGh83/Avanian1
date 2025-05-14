"use client";

// import ThemeSwitchButton from "@/components/buttons/ThemeSwitcher/ThemeSwitchButton";
import React, { ReactNode, useState } from "react";
import { FaHome, FaUser, FaInfoCircle, FaUserTie } from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavSVG from "./NavSVG";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState("");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavSVG />
      <nav className="w-full flex flex-row h-20 justify-between items-center px-1">
        <Image
          src="/images/logo.png"
          alt="Avanian"
          width={200}
          height={200}
          className="md:w-28 w-14 z-10"
        />
        <div className='block md:hidden'>
          <button
            className='size-12 flex justify-center items-center hover:text-blue-200 hover:cursor-pointer transition-all'
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu size={36} />
          </button>

          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} buttons={buttons} />
        </div>
        
        <div className="hidden md:flex flex-row gap-2 md:gap-3 lg:gap-8 text-base items-center">
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
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full ${isActive ? "bg-lightGreen" : "bg-transparent"
                      }`}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">{/* <ThemeSwitchButton /> */}</div>
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
    { icon: <FaMessage />, text: "بات", link: "/chat" },
    { icon: <FaInfoCircle />, text: "درباره ما", link: "/about-us" },
    { icon: <FaUserTie />, text: "مشاوره والدین", link: "/parent-advisor" },
    { icon: <FaUser />, text: "ورود", link: "/login" },
  ];
