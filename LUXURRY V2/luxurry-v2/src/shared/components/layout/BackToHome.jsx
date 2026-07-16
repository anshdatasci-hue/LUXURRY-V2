"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-[#E5DED6]
        bg-white
        px-4
        py-2
        text-sm
        text-[#3A3530]
        transition-colors
        hover:bg-[#F5F3EF]
      "
    >
      <ArrowLeft size={18} />
      Back to Home
    </Link>
  );
}