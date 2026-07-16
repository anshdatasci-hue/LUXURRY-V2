"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCart } from "@/contexts/CartContext";
import { placeOrder } from "@/features/checkout/actions/placeOrder";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    customer_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handlePlaceOrder() {
    if (
      !form.customer_name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode
    ) {
      alert("Please fill in all shipping details.");
      return;
    }
    try {
      await placeOrder({
        ...form,
        items: cart,
        total,
      });

      clearCart();

      router.push("/order-success");
    } catch (error) {
      console.error(error);

      alert("Failed to place order.");
    }
  }

  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-semibold">Your cart is empty</h1>

        <Link
          href="/products"
          className="mt-8 rounded-xl bg-[#3A3530] px-6 py-3 text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-semibold text-[#3A3530]">Checkout</h1>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Shipping Form */}
        <div className="rounded-2xl border border-[#E5DED6] bg-white p-8">
          <h2 className="mb-6 text-2xl font-semibold">Shipping Details</h2>

          <div className="space-y-4">
            <input
              name="customer_name"
              placeholder="Full Name"
              value={form.customer_name}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <textarea
              name="address"
              placeholder="Address"
              rows={4}
              value={form.address}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <input
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl border border-[#E5DED6] bg-white p-8">
          <h2 className="mb-6 text-2xl font-semibold">Order Summary</h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>₹{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between border-t pt-6 text-xl font-semibold">
            <span>Total</span>

            <span>₹{total.toLocaleString()}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-8 w-full rounded-xl bg-[#3A3530] py-4 text-white transition hover:bg-[#4A443E]"
          >
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
}
