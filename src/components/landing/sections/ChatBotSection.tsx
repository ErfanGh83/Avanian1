"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionButton from "./SectionButton";

export default function ChatBotSection() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <motion.section
      // ref={ref}
      id="chat"
      className="relative bg-landing_bg4 dark:bg-dark4 items-center w-full pt-20 px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute right-0 left-0 w-full bottom-[-70px] sm:bottom-[-120px] md:bottom-[-150px] xl:bottom-[-200px] z-[-4] fill-landing_bg4"
      >
        <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,170.7C672,192,768,256,864,277.3C960,299,1056,277,1152,277.3C1248,277,1344,299,1392,309.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className="max-w-[1100px] gap-8 justify-around mx-auto px-10 flex flex-col-reverse items-center md:flex-row ">
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
          <h3 className="text-4xl font-bold mb-2 text-outline-lg">
            چت بات هوشمند آوانیان
          </h3>
          <p className="text-lg text-justify max-w-[400px] md:max-w-[500px] text-outline-md">
            پیر دانا و مشاور به والدین آنها می آموزد که با کشف علاقمندی کودکان،
            صرفه جویی در زمان و هزینه ، روی توانمند و علاقمندی ایشان سرمایه
            گذاری خواهید نمود.
          </p>
          <SectionButton href="/chat">رفتن به بات</SectionButton>
        </motion.div>

        <motion.img
          src="/vectors/owl.svg"
          alt="جغد دانا"
          width={250}
          height={250}
          loading="lazy"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[200px] md:w-[250px] h-auto"
        />
      </div>
    </motion.section>
  );
}
