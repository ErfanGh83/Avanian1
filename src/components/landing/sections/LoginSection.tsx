"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionButton from "./SectionButton";

export default function LoginSection() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <motion.section
      // ref={ref}
      className="relative gap-6 bg-landing_bg4 dark:bg-dark4 w-full mt-[10vh] md:mt-[30vh] px-4"
    >
      <div
        id="login"
        className="max-w-[1100px] gap-8 px-3 mx-auto flex flex-col md:flex-row justify-around items-center mt-[100px] md:mt-[150px]"
      >
        <div className="absolute bg-landing_bg4 dark:bg-dark4 top-[-200px] left-0 right-0 w-full h-[300px] z-[-4]" />
        <div className="absolute bg-landing_bg4 dark:bg-dark4 bottom-[-80px] left-0 right-0 w-full h-[150px] z-[-4]" />

        <motion.img
          src="/vectors/book.svg"
          alt="ثبت نام"
          width={250}
          height={250}
          viewport={{ once: true }}
          loading="lazy"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[200px] md:w-[250px] h-auto"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-right"
        >
          <h3 className="text-4xl font-bold mb-2 text-outline">
            ثبت نام و عضویت در «سرزمین آوانیان»
          </h3>
          <p className="max-w-[400px] md:max-w-[500px] text-justify text-lg text-outline">
            دسترسی به بهترین خدمات و محصولات تخصصی اوقات فراغت کودک و نوجوان
          </p>

          <div className="flex flex-row gap-3 md:gap-6">
            <SectionButton href="/sign-up">ثبت نام</SectionButton>
            <SectionButton href="/login">ورود</SectionButton>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
