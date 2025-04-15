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
      className="relative bg-landing_bg3 items-center w-full mt-[15vh] md:mt-[30vh] px-4 pb-36"
    >
      <div className="absolute top-[-20vh] md:top-[-25vh] right-0 w-full bg-landing_bg3 h-[40vh] z-[-7]" />

      <div className="max-w-[1100px] gap-6 justify-around mx-auto flex flex-col items-center md:flex-row ">
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
          <h3 className="text-4xl font-bold mb-2">رفتن به فروشگاه آوانیان</h3>
          <p className="max-w-[80vh]">
            «فروشگاه آوانیان»، به عنوان نخستین فروشگاه اینترنتی و Market Place
            تخصصی حوزه اوقات فراغت کودک و نوجوان فعالیت خود را از بهار ۱۴۰۱ به
            نام «شبکه اوقات فراغت» آغاز نموده است.
          </p>

          <SectionButton href="/shop">رفتن به فروشگاه</SectionButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
