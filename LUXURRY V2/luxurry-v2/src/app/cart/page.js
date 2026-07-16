"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { cart, total, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <ShoppingBag size={72} className="mb-6 text-[#C8A96B]" />

        <h1 className="text-3xl font-semibold text-[#3A3530]">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-[#7C6B58]">
          Add luxury products to begin your shopping journey.
        </p>

        <Link
          href="/products"
          className="mt-8 rounded-xl bg-[#3A3530] px-6 py-3 text-white hover:bg-[#4A443E]"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-semibold text-[#3A3530]">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 rounded-2xl border border-[#E5DED6] bg-white p-5"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="h-28 w-28 rounded-xl object-cover"
            />

            <div className="flex-1">
              <h2 className="text-xl font-medium">{item.name}</h2>

              <p className="text-[#7C6B58]">{item.brand}</p>

              <p className="mt-2 font-semibold">
                ₹{item.price.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => decreaseQuantity(item.id)}>
                <Minus />
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                <Plus />
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              <Trash2 />
            </button>
          </div>
        ))}

        <div className="flex items-center justify-between border-t pt-6">
          <h2 className="text-2xl font-semibold">Total</h2>

          <p className="text-2xl font-bold">₹{total.toLocaleString()}</p>
        </div>

        <div className="flex justify-end">
          <Link
            href="/checkout"
            className="rounded-xl bg-[#3A3530] px-8 py-3 text-white hover:bg-[#4A443E]"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
