import Link from "next/link";
import { requireUser } from "@/lib/supabase/auth";
import { createClient } from "@/lib/supabase/server";

export default async function OrdersPage() {
  const user = await requireUser();

  const supabase = await createClient();

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-semibold text-[#3A3530]">My Orders</h1>

      {orders?.length === 0 ? (
        <div className="rounded-2xl border border-[#E5DED6] bg-white p-10 text-center">
          <h2 className="text-2xl font-semibold">No Orders Yet</h2>

          <p className="mt-3 text-[#7C6B58]">
            Your purchased luxury products will appear here.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-[#3A3530] px-6 py-3 text-white"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-[#E5DED6] bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">
                    Order #{order.id.slice(0, 8).toUpperCase()}
                  </h2>

                  <p className="mt-1 text-sm text-[#7C6B58]">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-semibold">
                    ₹{Number(order.total).toLocaleString()}
                  </p>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                    {order.status}
                  </span>
                </div>
              </div>

              <Link
                href={`/orders/${order.id}`}
                className="mt-5 inline-block rounded-lg border border-[#3A3530] px-5 py-2 hover:bg-[#3A3530] hover:text-white"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
