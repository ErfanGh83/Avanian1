"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ShopSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative bg-landing_bg4 items-center w-full mt-[15vh] md:mt-[35vh] px-4 pb-36"
    >
      <div className="absolute top-[-15vh] md:top-[-35vh] right-0 w-full bg-landing_bg4 h-64 z-[-7]" />

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
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[250px] md:w-[350px] h-auto"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-right"
        >
          <h3 className="text-4xl font-bold mb-2">رفتن به فروشگاه آوانیان</h3>
          <p className="max-w-[80vh]">
            با مراجعه به فروشگاه آوانیان، میتوانید از جدیدترین محصولات و خدمات
            ما دیدن کنید. چه به دنبال خرید آنلاین باشید و چه بخواهید از
            پیشنهادهای ویژه ما استفاده کنید، همهچیز در فروشگاه آوانیان در دسترس
            شماست. همین حالا به فروشگاه سر بزنید و از تجربه خریدی آسان و مطمئن
            لذت ببرید!
          </p>
          <motion.button
            className="px-8 py-3 bg-turquoise dark:bg-dark1 text-white my-6 rounded-3xl"
            whileHover={{ scale: 1.2, y: -10, opacity: 0.95 }}
            whileTap={{ scale: 0.9, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            رفتن به بات
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
