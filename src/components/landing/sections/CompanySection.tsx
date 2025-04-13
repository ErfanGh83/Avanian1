"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CompanySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <>
      <div className="bg-landing_bg1 dark:bg-dark1 w-full h-[40vh] absolute top-10 -z-20" />
      <motion.div
        ref={ref}
        className=" relative bg-landing_bg1 dark:bg-dark1 w-full flex items-center justify-around flex-col-reverse gap-3 md:flex-row mt-44 mb-0 pt-30 pb-16"
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 50,
        }}
        transition={{ duration: .5 }}
      >
        <div className="flex flex-col items-start">
          <h1 className="text-5xl pb-2">سرزمین آوانیان</h1>
          <h3 className="max-w-[40vw]">
            شرکت آوانیان با تکیه بر دانش فنی و تجربه‌ی تخصصی، در زمینه‌های
            طراحی، توسعه و پیاده‌سازی نرم‌افزارهای سازمانی و هوشمند فعالیت
            می‌کند و همواره کیفیت و نوآوری را سرلوحه‌ی خدمات خود قرار داده است.
          </h3>
        </div>
        <motion.img
          src={"/vectors/logo.svg"}
          alt="سرزمین آوانیان"
          width={250}
          height={250}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -50,
          }}
          transition={{ duration: .5 }}
        />
      </motion.div>
      <svg
        className="w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0V30 C180,60 360,45 540,30 C720,15 900,30 1080,15 C1260,0 1440,30 1440,30 V0 Z"
          fill="currentColor"
          className="text-landing_bg1 dark:text-dark1"
        />
      </svg>
    </>
  );
}
