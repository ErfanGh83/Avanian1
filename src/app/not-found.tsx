import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="w-full h-screen bg-dark3 flex flex-row justify-center items-center">
      <div className="w-[40vw] min-h-[100px] bg-white/40 p-8 flex flex-col items-center gap-6 rounded-2xl max-h-[600px]">
        <h2 className="text-center text-xl text-gray-900">
          404 | صفحه مورد نظر یافت نشد
        </h2>
        <Link href="/" className="text-center text-gray-700 hover:underline">
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
