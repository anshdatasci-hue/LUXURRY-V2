"use client";

import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";

import { useWishlist } from "@/contexts/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <Heart size={70} className="mb-6 text-[#C8A96B]" />

        <h1 className="text-3xl font-semibold text-[#3A3530]">
          Your Wishlist is Empty
        </h1>

        <p className="mt-3 max-w-md text-[#7C6B58]">
          Save your favorite luxury products and they'll appear here.
        </p>

        <Link
          href="/products"
          className="mt-8 rounded-xl bg-[#3A3530] px-6 py-3 text-white transition hover:bg-[#4A443E]"
        >
          Explore Products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-semibold text-[#3A3530]">
        My Wishlist
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-2xl border border-[#E5DED6] bg-white shadow-sm"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="h-64 w-full object-cover"
            />

            <div className="space-y-3 p-5">
              <h2 className="text-xl font-medium">{product.name}</h2>

              <p className="text-sm text-[#7C6B58]">{product.brand}</p>

              <p className="text-lg font-semibold">
                ₹{product.price.toLocaleString()}
              </p>

              <div className="flex gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 rounded-lg border border-[#3A3530] py-2 text-center transition hover:bg-[#3A3530] hover:text-white"
                >
                  View
                </Link>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
