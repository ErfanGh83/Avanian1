import Footer from "@/components/landing/Footer";
import NavBar from "@/components/landing/nav/NavBar";
import React from "react";

function page() {
  return (
    <>
      <div className="text-white bg-landing_bg1 pb-8 px-4 w-full min-h-full overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 z-10">
          <NavBar />
        </div>
        <div className="pt-56 md:pt-60 xl:pt-64">
          <section className="max-w-[1000px] shadow-sm px-4 py-8 rounded-xl bg-gray-50/25 mx-auto">
            <h2 className="font-bold mb-4 text-3xl text-outline-lg">
              درباره ما
            </h2>
            <h4 className="text-xl text-justify text-outline-md">
              موسسه فرهنگی آوانیان با بهره‌گیری از تجربیات استاد رضا
              تبریزی(وحید) پژوهشگر و مدرس هنر و خلاقیت، برای حل مسأله اوقات
              فراغت کودکان و نوجوانان راهکارهای نوینی را در قالب نخستین زیست‌بوم
              تخصصی این حوزه، به صورت پلتفرم و بازار آنلاین، فضاهای حضوری مانند
              پارک موضوعی، کافه رستوران و فروشگاه‌های زنجیره‌ای ارزش فرهنگی‌ای
              به نام «سرزمین آوانیان » ایجاد نموده است. زیست‌بوم تخصصی مدیریت و
              برنامه‌ریزی اوقات فراغت کودک و نوجوان با هدف «نوآوری اجتماعی » در
              فرایند برنامه‌ریزی و بهینه‌سازی اوقاف فراغت بیش از 18000000 کودک و
              نوجوان سراسر کشور، ضمن ایجاد ساختار بازار پردازی فرهنگی با خلق
              شخصیت‌های میبتی بر تمدن و فرهنگ ایران، زمینه‌ساز رشد صنایع خلاق
              فرهنگی کودکان و نوجوانان را با خلق فرصت‌های کم‌نظیر «کارآفرینی
              اجتماعی» می‌شود.
            </h4>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
