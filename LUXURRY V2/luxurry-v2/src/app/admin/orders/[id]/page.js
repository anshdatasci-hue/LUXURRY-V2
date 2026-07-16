import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteOrder } from "@/features/admin/actions/deleteOrder";

import { createClient } from "@/lib/supabase/server";

export default async function AdminOrderDetailsPage({ params }) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: order } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (!order) {
    notFound();
  }

  const items =
    typeof order.items === "string" ? JSON.parse(order.items) : order.items;

  return (
    <main className="mx-auto max-w-6xl px-8 py-10">
      <Link
        href="/admin"
        className="mb-8 inline-block text-sm text-gray-600 hover:text-black"
      >
        ← Back to Dashboard
      </Link>

      <div className="rounded-2xl border bg-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold">
              Order #{order.id.slice(0, 8).toUpperCase()}
            </h1>

            <p className="mt-2 text-gray-500">
              {new Date(order.created_at).toLocaleString()}
            </p>
          </div>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            {order.status}
          </span>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-xl font-semibold">Customer</h2>

            <p>
              <strong>Name:</strong> {order.customer_name}
            </p>
            <p>
              <strong>Email:</strong> {order.email}
            </p>
            <p>
              <strong>Phone:</strong> {order.phone}
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-xl font-semibold">Shipping Address</h2>

            <p>{order.address}</p>
            <p>{order.city}</p>
            <p>{order.state}</p>
            <p>{order.pincode}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-semibold">Ordered Items</h2>

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

                  <p>Qty: {item.quantity}</p>
                </div>

                <div className="text-lg font-semibold">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-between border-t pt-6 text-2xl font-semibold">
          <span>Total</span>

          <span>₹{Number(order.total).toLocaleString("en-IN")}</span>
        </div>

        <form action={deleteOrder.bind(null, order.id)} className="mt-8">
          <button
            type="submit"
            className="rounded-xl bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
          >
            Delete Order
          </button>
        </form>
      </div>
    </main>
  );
}
