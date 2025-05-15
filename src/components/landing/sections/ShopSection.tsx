"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionButton from "./SectionButton";

export default function ShopSection() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <motion.div
      // ref={ref}
      id="shop"
      className="relative bg-landing_bg3 items-center w-full mt-[150px] md:mt-[250px] px-4 pb-36"
    >
      <div className="absolute top-[-200px] md:top-[-300px] right-0 w-full bg-landing_bg3 h-[400px] z-[-7]" />

      <div className="max-w-[1100px] px-10 gap-8 justify-around mx-auto flex flex-col items-center md:flex-row ">
        <motion.img
          src="/vectors/shop.svg"
          alt="فروشگاه"
          width={400}
          height={400}
          loading="lazy"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[250px] md:w-[350px] h-auto"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-right"
        >
          <h3 className="text-4xl font-bold mb-2 text-outline">
            فروشگاه تخصصی اوقات فراغت
          </h3>
          <p className="max-w-[400px] md:max-w-[500px] text-justify text-lg text-outline">
            نخستین فروشگاه تخصصی محصولات و خدمات اوقات فراغت کودک و نوجوان در
            سراسر کشور از سال ۱۴۰۱
          </p>

          <SectionButton href="https://avanian.ir">فروشگاه</SectionButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
