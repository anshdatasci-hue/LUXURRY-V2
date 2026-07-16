"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
const [added, setAdded] = useState(false);

function handleClick() {
  addToCart(product);

  setAdded(true);

  setTimeout(() => {
    setAdded(false);
  }, 2000);
}

  return (
  <div className="flex flex-col items-start">
    <button
      onClick={handleClick}
      className="flex items-center gap-2 rounded-xl bg-[#3A3530] px-6 py-3 text-white transition hover:bg-[#4A443E]"
    >
      <ShoppingCart size={18} />
      Add to Cart
    </button>

    {added && (
      <p className="mt-2 text-sm font-medium text-green-600">
        ✓ Added to cart successfully
      </p>
    )}
  </div>
);
}