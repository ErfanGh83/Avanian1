"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CompanySection() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <>
      <div className="bg-landing_bg1 dark:bg-dark1 w-full h-[300px] absolute top-10 z-[-2]" />

      <motion.section
        // ref={ref}
        className="relative bg-landing_bg1 dark:bg-dark1 flex flex-col-reverse md:flex-row items-center justify-around gap-8 mt-44 mb-0 pb-10 px-6 md:px-16"
      >
        <div className="absolute bottom-[-10] z-[-2] bg-landing_bg1 dark:bg-dark1 w-full h-[100px] " />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-start text-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold pb-4 text-outline-lg">
            سرزمین آوانیان
          </h1>
          <p className="text-lg text-justify max-w-[400px] md:max-w-[500px] text-outline-md">
            سرزمین نخستین زیست بوم تخصصی اوقات و فراغت کودکان و نوجوانان ایران
            زمین است. شخصیت های جهان داستان آوانیان روایت جدیدی از روش های
            سازماندهی و برنامه ریزی خانواده ایرانی در زمان فراغتشان را بیان می
            کنند.
          </p>
        </motion.div>

        <motion.img
          src="/vectors/logo.svg"
          alt="سرزمین آوانیان"
          width={250}
          viewport={{ once: true }}
          height={250}
          loading="lazy"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-[200px] md:w-[250px] h-auto"
        />
      </motion.section>

      <svg
        className="w-full h-32"
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
