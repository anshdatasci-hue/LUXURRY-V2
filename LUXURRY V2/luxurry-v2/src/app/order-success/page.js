"use client";

import Link from "next/link";
import { CircleCheckBig, ShoppingBag, User } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="mx-auto flex min-h-[75vh] max-w-5xl items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-[#E5DED6] bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F3EF]">
          <CircleCheckBig size={42} className="text-green-600" />
        </div>

        <h1 className="text-4xl font-semibold text-[#3A3530]">
          Order Placed Successfully
        </h1>

        <p className="mt-4 leading-7 text-[#7C6B58]">
          Thank you for choosing LUXURRY.
          <br />
          Your order has been received and is being prepared.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/products"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#3A3530] px-6 py-3 text-white transition hover:bg-[#4A443E]"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>

          <Link
            href="/profile"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#E5DED6] px-6 py-3 text-[#3A3530] transition hover:bg-[#F8F6F3]"
          >
            <User size={18} />
            Go to Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
