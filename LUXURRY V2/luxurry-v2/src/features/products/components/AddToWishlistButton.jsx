"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";

export default function AddToWishlistButton({ product }) {
  const {
    addToWishlist,
    removeFromWishlist,
    isWishlisted,
  } = useWishlist();

  const wished = isWishlisted(product.id);

  function handleClick() {
    if (wished) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 rounded-xl px-6 py-3 transition
      ${
        wished
          ? "bg-red-500 text-white"
          : "border border-[#3A3530] hover:bg-[#F5F3EF]"
      }`}
    >
      <Heart size={18} />

      {wished ? "Wishlisted" : "Add to Wishlist"}
    </button>
  );
}