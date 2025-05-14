import Footer from "@/components/landing/Footer";
import NavBar from "@/components/landing/nav/NavBar";
import React from "react";
import { data } from "./data";
import { FaDownload, FaFilePdf } from "react-icons/fa";

function page() {
    const pdfData = data;

    return (
        <>
            <div className="text-white bg-landing_bg1 pb-8 px-4 w-full min-h-full overflow-x-hidden">
                <div className="absolute top-0 left-0 right-0 z-10">
                    <NavBar />
                </div>

                <div className="pt-56 md:pt-60 xl:pt-64">
                    <section className="max-w-[1000px] shadow-sm px-4 py-8 rounded-xl bg-gray-900/40 backdrop-blur-md mx-auto">
                        <h2 className="font-bold mb-4 text-3xl text-white">
                            مشاور والدین
                        </h2>
                        <h4 className="text-xl text-justify text-gray-100 mb-6 leading-relaxed">
                            اوقات فراغت، فرصتی طلایی برای رشد مهارت‌ها، خلاقیت و شادی فرزندان شماست. برنامه‌ریزی مناسب بر اساس سن کودک، به تقویت هوش هیجانی، مهارت‌های اجتماعی و استعدادهای فردی کمک می‌کند. مشاوره تخصصی، مسیر درست را به شما نشان می‌دهد تا بهترین بهره را از این زمان ببرید.
                            با دریافت فایل راهنمای مرتبط، بهترین برنامه را برای فرزندتان طراحی کنید.
                        </h4>

                        <div className="grid gap-6 md:grid-cols-2">
                            {pdfData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-50/40 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow backdrop-blur-md"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <FaFilePdf className="text-red-500" size={32} />
                                    </div>

                                    <p className="mb-4 text-sm text-gray-200">{item.description}</p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                                    >
                                        دریافت فایل
                                        <FaDownload className="ml-2" />
                                    </a>
                                </div>
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

