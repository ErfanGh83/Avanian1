"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ChatBotSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative bg-landing_bg3 dark:bg-dark4 items-center w-full pt-20 px-4"
    >
      <div className="max-w-[1100px] gap-6 justify-around mx-auto flex flex-col-reverse items-center md:flex-row ">
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
          <h3 className="text-4xl font-bold mb-2">چت بات هوشمند آوانیان </h3>
          <p className="max-w-[80vh]">
            با چت‌بات هوشمند آوانیان، هر سوال فنی یا کسب‌وکاری شما در کمترین
            زمان ممکن پاسخ داده می‌شود. این سیستم پیشرفته که با آخرین
            تکنولوژی‌های پردازش زبان طبیعی توسعه یافته، آماده است تا به صورت ۲۴
            ساعته و در تمام روزهای هفته شما را در حل چالش‌های تخصصی یاری کند. از
            استعلام قیمت خدمات تا راهنمایی‌های فنی، چت‌بات آوانیان همراه همیشگی
            شما در دنیای دیجیتال است.
          </p>
          <motion.button
            className="px-8 py-3 bg-turquoise dark:bg-dark2 text-white my-6 rounded-3xl"
            whileHover={{ scale: 1.2, y: -10, opacity: 0.95 }}
            whileTap={{ scale: 0.9, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            رفتن به بات
          </motion.button>
        </motion.div>

        {/* <div className="rotate-3"> */}
        <motion.img
          src="/vectors/book.svg"
          alt="چت بات"
          width={250}
          height={250}
          loading="lazy"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[200px] md:w-[250px] h-auto"
        />
        {/* </div> */}
      </div>
    </motion.section>
  );
}
