import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="w-full overflow-hidden h-screen bg-dark3 p-6 flex flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-3 md:gap-6">
        <div className="  h-36 bg-white/40 py-6 px-3 md:px-8 flex flex-col items-center gap-6 rounded-2xl max-h-[600px]">
          <h2 className="text-center text-lg md:text-xl text-gray-900">
            404 | صفحه مورد نظر یافت نشد
          </h2>
          <Link href="/" className="text-center text-gray-700 hover:underline">
            بازگشت به خانه
          </Link>
        </div>
        <Image src={"/vectors/owl.svg"} alt="جغد دانا" width={150} height={150} className="h-36 hidden md:block lg:h-52 xl:h-64" />
      </div>
    </div>
  );
}
