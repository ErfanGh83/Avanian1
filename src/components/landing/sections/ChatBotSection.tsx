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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute right-0 left-0 w-full bottom-[-10vh] md:bottom-[-30vh] z-[-6] fill-landing_bg3 dark:fill-dark4"
      >
        <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,170.7C672,192,768,256,864,277.3C960,299,1056,277,1152,277.3C1248,277,1344,299,1392,309.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
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
      </div>
    </motion.section>
  );
}
