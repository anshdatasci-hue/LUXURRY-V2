import { notFound } from "next/navigation";
import Link from "next/link";

import { requireUser } from "@/lib/supabase/auth";
import { createClient } from "@/lib/supabase/server";

export default async function OrderDetailsPage({ params }) {
  const { id } = await params;

  const user = await requireUser();

  const supabase = await createClient();

  const { data: order } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (!order) {
    notFound();
  }

  const items =
    typeof order.items === "string" ? JSON.parse(order.items) : order.items;

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Link
        href="/orders"
        className="mb-8 inline-block text-[#7C6B58] hover:text-[#3A3530]"
      >
        ← Back to Orders
      </Link>

      <div className="rounded-2xl border border-[#E5DED6] bg-white p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">
              Order #{order.id.slice(0, 8).toUpperCase()}
            </h1>

            <p className="mt-2 text-[#7C6B58]">
              {new Date(order.created_at).toLocaleString()}
            </p>
          </div>

          <select
            defaultValue={order.status}
            className="rounded-lg border px-4 py-2"
          >
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        <div className="mb-8 rounded-xl bg-[#F8F6F3] p-6">
          <h2 className="mb-4 text-xl font-semibold">Shipping Information</h2>

          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {order.customer_name}
            </p>

            <p>
              <strong>Email:</strong> {order.email}
            </p>

            <p>
              <strong>Phone:</strong> {order.phone}
            </p>

            <p>
              <strong>Address:</strong> {order.address}
            </p>

            <p>
              <strong>City:</strong> {order.city}
            </p>

            <p>
              <strong>State:</strong> {order.state}
            </p>

            <p>
              <strong>Pincode:</strong> {order.pincode}
            </p>
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-semibold">Ordered Items</h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-xl border p-4"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="h-24 w-24 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <p className="text-[#7C6B58]">Qty: {item.quantity}</p>
              </div>

              <p className="text-lg font-semibold">
                ₹{Number(item.price).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between border-t pt-6 text-2xl font-semibold">
          <span>Total</span>

          <span>₹{Number(order.total).toLocaleString()}</span>
        </div>
      </div>
    </main>
  );
}
