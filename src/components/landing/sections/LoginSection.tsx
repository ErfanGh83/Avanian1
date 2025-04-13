"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function LoginSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative gap-6 bg-landing_bg3 flex flex-col md:flex-row justify-around items-center w-full mt-[10vh] md:mt-[30vh]"
    >
      <div className="absolute bg-landing_bg3 top-[-30vh] left-0 right-0 w-full h-[35vh] z-[-5]" />

      <motion.img
        src="/vectors/notebook.svg"
        alt="سرزمین آوانیان"
        width={250}
        height={250}
        loading="lazy"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[200px] md:w-[250px] h-auto"
      />

      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-start text-right"
      >
        <h3 className="text-4xl font-bold mb-2">
          به خانواده آوانیان بپیوندید!
        </h3>
        <p className="max-w-[80vh]">
          با عضویت در این سامانه، از خدمات هوشمند چت‌بات، دوره‌های آموزشی تخصصی
          و پیشنهادهای ویژه‌ی نرم‌افزاری بهره‌مند شوید. همین حالا با چند کلیک
          ساده به جمع متخصصان ما بپیوندید و تجربه‌ی متفاوتی از فناوری را آغاز
          کنید.
        </p>
        <motion.button
          className="px-8 py-3 bg-turquoise dark:bg-dark2 text-white my-6 rounded-3xl"
          whileHover={{ scale: 1.2, y: -10, opacity: .95 }}
          whileTap={{ scale: .9, y: -5 }}
          transition={{ duration: .3}}
        >
          بگا رفتن
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
