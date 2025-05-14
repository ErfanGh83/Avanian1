import Footer from "@/components/landing/Footer";
import NavBar from "@/components/landing/nav/NavBar";
import React from "react";
import { data } from "./data";
import Image from "next/image";

function page() {
    const pdfData = data;

    const themeClassMap: { [key: string]: string } = {
        purple: "bg-purple-500 hover:bg-purple-600",
        blue: "bg-blue-500 hover:bg-blue-600",
        green: "bg-green-500 hover:bg-green-600",
        red: "bg-red-500 hover:bg-red-600",
    };

    return (
        <>
            <div className="text-white bg-landing_bg1 pb-8 px-4 w-full min-h-full overflow-x-hidden">
                <div className="absolute top-0 left-0 right-0 z-10">
                    <NavBar />
                </div>

                <div className="pt-56 md:pt-60 xl:pt-64">
                    <section className="max-w-[1000px] shadow-sm px-4 py-8 rounded-xl bg-gray-900/40 backdrop-blur-md mx-auto">
                        <h2 className="font-bold mb-4 text-3xl text-white">
                            مشاوره والدین
                        </h2>
                        <h4 className="text-xl text-justify text-gray-100 mb-6 leading-relaxed">
                            اوقات فراغت، فرصتی طلایی برای رشد مهارت‌ها، خلاقیت و شادی فرزندان شماست. برنامه‌ریزی مناسب بر اساس سن کودک، به تقویت هوش هیجانی، مهارت‌های اجتماعی و استعدادهای فردی کمک می‌کند. مشاوره تخصصی، مسیر درست را به شما نشان می‌دهد تا بهترین بهره را از این زمان ببرید.
                            با دریافت فایل راهنمای مرتبط، بهترین برنامه را برای فرزندتان طراحی کنید.
                        </h4>

                        <div className="grid gap-6 gap-y-16 lg:grid-cols-2 justify-items-center mt-24">

                            {pdfData.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={`
                                        w-[300px] sm:w-[350px] md:w-[430px] h-[150px] md:h-[200px] flex flex-row items-center pl-6 pr-4 
                                        rounded-full hover:scale-105 transition-all
                                        ${themeClassMap[item.theme] || 'bg-gray-500'}
                                    `}
                                >
                                    <div className="w-1/2 h-full flex justify-center items-center">
                                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{item.title}</h2>
                                    </div>

                                    <div className="w-1/2 h-full relative">
                                        <div className="size-48 md:size-56 absolute bottom-[8%] z-20">
                                            <Image src={item.imageSrc} alt={`pdf-image-${item.title}`} fill />
                                        </div>
                                    </div>
                                </a>
                            ))}

                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default page;

