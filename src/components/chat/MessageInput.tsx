import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MessageInput() {
  return (
    <form className="w-full h-fit rounded-full flex flex-row bg-white justify-center items-center gap-6 py-1 px-2 mx-auto mb-4 overflow-hidden focus-within:outline focus-within:outline-2 focus-within:outline-blue-400 focus-within:outline-offset-2">
      <textarea
        placeholder="از زانیار بپرس..."
        className="w-full p-4 min-h-[20px] h-fit max-h-[200px] overflow-y-auto text-neutral-800 rounded-full focus:outline-none transition-all resize-none shadow-sm placeholder:text-gray-500"
      />

      <button
        type="submit"
        className="w-28 h-fit flex flex-row gap-2 items-center justify-center px-3 py-4 rounded-full bg-[#5ec4ff] hover:bg-[#48b1ef] text-white shadow-lg transition-all"
        aria-label="ارسال پیام"
      >
        <p className="text-xl">ارسال</p>
        <FaArrowUp size={24} />
      </button>
    </form>
  );
}